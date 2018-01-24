(ns hasch.platform
  (:require [goog.crypt.Sha512]
            [cljs.reader :as reader]
            [clojure.string]
            [incognito.base :as ib]
            [hasch.benc :refer [magics PHashCoercion -coerce
                                digest coerce-seq xor-hashes encode-safe]]))

#_(do
    (ns dev)
    (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                         (cemerick.austin/repl-env)))
    (cemerick.austin.repls/cljs-repl repl-env))

(def uuid4 random-uuid)

(defn byte->hex [b]
  (-> b
      (bit-and 0xff)
      (+ 0x100)
      (.toString 16)
      (.substring 1)))


(defn hash->str [bytes]
  (apply str (map byte->hex bytes)))


;; taken from http://jsperf.com/uint8array-vs-array-encode-to-utf8/2
;; which is taken from //http://user1.matsumoto.ne.jp/~goma/js/utf.js
;; verified against: "小鳩ちゃんかわいいなぁ"
(defn utf8
  "Encodes a string as UTF-8 in an unsigned js array."
  [s]
  (into-array
   (mapcat
    (fn [pos]
      (let [c (.charCodeAt s pos)]
        (cond (<= c 0x7F) [(bit-and c 0xFF)]
              (<= c 0x7FF) [(bit-or 0xC0 (bit-shift-right c 6))
                            (bit-or 0x80 (bit-and c 0x3F))]
              (<= c 0xFFFF) [(bit-or 0xE0 (bit-shift-right c 12))
                             (bit-or 0x80 (bit-and (bit-shift-right c 6) 0x3F))
                             (bit-or 0x80 (bit-and c 0x3F))]
              :default (let [j (loop [j 4]
                                 (if (pos? (bit-shift-right c (* j 6)))
                                   (recur (inc j))
                                   j))
                             init (bit-or (bit-and (bit-shift-right 0xFF00 j) 0xFF)
                                          (bit-shift-right c (* 6 (dec j))))]
                         (conj (->> (range (dec j))
                                    reverse
                                    (map #(bit-or 0x80
                                                  (bit-and (bit-shift-right c (* 6 %))
                                                           0x3F))))
                               init)))))
    (range (.-length s)))))

#_(utf8 "小鳩ちゃんかわいいなぁ")

(defn uuid5
  "Generates a uuid5 from a sha-1 hash byte sequence.
Our hash version is coded in first 2 bits."
  [sha-hash]
  (let [[hb1 hb2 hb3 hb4 hb5 hb6 hb7 hb8
         lb1 lb2 lb3 lb4 lb5 lb6 lb7 lb8] sha-hash]
    (-> [(bit-clear (bit-clear hb1 7) 6) hb2 hb3 hb4 hb5 hb6 (bit-or 0x50 (bit-and 0x5f hb7)) hb8
         (bit-clear (bit-set lb1 7) 6) lb2 lb3 lb4 lb5 lb6 lb7 lb8]
        hash->str
        ((fn [s] (str (apply str (take 8 s))
                     "-" (apply str (take 4 (drop 8 s)))
                     "-" (apply str (take 4 (drop 12 s)))
                     "-" (apply str (take 4 (drop 16 s)))
                     "-" (apply str (drop 20 s)))))
        uuid)))

(defn sha512-message-digest []
  (goog.crypt.Sha512.))

(defn encode [magic a]
  (.concat #js [magic] a))

(defn- str->utf8 [x]
  (-> x str utf8))

(extend-protocol PHashCoercion
  nil
  (-coerce [this md-create-fn write-handlers]
    (encode (:nil magics) #js[]))

  boolean
  (-coerce [this md-create-fn write-handlers]
    (encode (:boolean magics) #js [(if this 41 40)]))

  string
  (-coerce [this md-create-fn write-handlers]
    (encode (:string magics) (encode-safe (str->utf8 this) md-create-fn)))

  number
  (-coerce [this md-create-fn write-handlers]
    ;; utf8 is not needed, can be optimized
    (encode (:number magics) (str->utf8 this)))

  js/Date
  (-coerce [this md-create-fn write-handlers]
    ;; utf8 is not needed, can be optimized
    (encode (:inst magics) (str->utf8 (.getTime this))))

  cljs.core/UUID
  (-coerce [this md-create-fn write-handlers]
    (encode (:uuid magics) (str->utf8 (.-uuid this))))

  cljs.core/Symbol
  (-coerce [this md-create-fn write-handlers]
    (encode (:symbol magics) (encode-safe (str->utf8 this) md-create-fn)))

  cljs.core/Keyword
  (-coerce [this md-create-fn write-handlers]
    (encode (:keyword magics) (encode-safe (str->utf8 this) md-create-fn)))

  default
  (-coerce [this md-create-fn write-handlers]
    (cond (instance? ib/IncognitoTaggedLiteral this)
          (let [{:keys [tag value]} this]
            (encode (:literal magics) (coerce-seq [tag value] md-create-fn write-handlers)))

          (satisfies? IRecord this)
          (let [{:keys [tag value]} (ib/incognito-writer write-handlers this)]
            (encode (:literal magics) (coerce-seq [tag value] md-create-fn write-handlers)))

          (satisfies? ISeq this)
          (encode (:seq magics) (coerce-seq this md-create-fn write-handlers))

          (satisfies? IVector this)
          (encode (:vector magics) (coerce-seq this md-create-fn write-handlers))

          (satisfies? IMap this)
          (encode (:map magics) (xor-hashes (map #(-coerce % md-create-fn write-handlers)
                                                 (seq this))))

          (satisfies? ISet this)
          (encode (:set magics) (xor-hashes (map #(digest (-coerce % md-create-fn write-handlers)
                                                          md-create-fn)
                                                 (seq this))))

          (instance? js/Uint8Array this)
          (encode (:binary magics) (encode-safe (js/Array.prototype.slice.call this) md-create-fn))

          :else
          (throw (ex-info "Cannot hash unknown type, you can extend PHashCoercion protocol for:"
                          {:type (type this)
                           :value this})))))



(comment
  (js/Array.prototype.slice.call (js/Uint8Array. #js [1 2 3]))
  (.log js/console (-coerce (js/Uint8Array. #js [1 2 3]) (sha512-message-digest) sha512-message-digest))

  (do
    (def datom-vector (doall (vec (repeat 10000 {:db/id 18239
                                                 :person/name "Frederic"
                                                 :person/familyname "Johanson"
                                                 :person/street "Fifty-First Street 53"
                                                 :person/postal 38237
                                                 :person/telefon "02343248474"
                                                 :person/weeight 0.3823}))))
    nil)

  (time (-coerce datom-vector sha512-message-digest))

  (coerce-seq (sha512-message-digest) sha512-message-digest [:foo {:a "b"}])

  ;; quick & dirty js advanced compilation benchmark
  (enable-console-print!)

  (def datom-vector (doall (vec (repeat 10000 {:db/id 18239
                                               :person/name "Frederic"
                                               :person/familyname "Johanson"
                                               :person/street "Fifty-First Street 53"
                                               :person/postal 38237
                                               :person/telefon "02343248474"
                                               :person/weeight 0.3823}))))


  (.log js/console "benchmarking: " (time (-coerce datom-vector sha512-message-digest))))
