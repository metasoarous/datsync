(ns hasch.benc
  "Binary encoding of EDN values."
  #?@(:clj [(:import java.security.MessageDigest
                     java.io.ByteArrayOutputStream)]))

#?(:clj (set! *warn-on-reflection* true))

(defprotocol PHashCoercion
  (-coerce [this md-create-fn write-handlers]))


;; changes break hashes!
(def magics {:nil (byte 0)
             :boolean (byte 1)
             :number (byte 2)
             :string (byte 3)
             :symbol (byte 4)
             :keyword (byte 5)
             :inst (byte 6)
             :uuid (byte 7)
             :seq (byte 8)
             :vector (byte 9)
             :map (byte 10)
             :set (byte 11)
             :literal (byte 12)
             :binary (byte 13)})

(def split-size 1024)

(def max-entropy-byte-count 32)

#?(:cljs (defn- byte-array [len] (into-array (repeat len 0))))

(defn ^bytes digest
  [bytes-or-seq-of-bytes md-create-fn]
  (let [^MessageDigest md (md-create-fn)]
    (if (seq? bytes-or-seq-of-bytes)
      (doseq [^bytes bs bytes-or-seq-of-bytes]
        (.update md bs))
      (.update md  ^bytes bytes-or-seq-of-bytes))
     (.digest md)))

(defn ^bytes coerce-seq [seq md-create-fn write-handlers]
  (let [^MessageDigest seq-md (md-create-fn)]
    (loop [s seq]
      (let [[f & r] s]
        (.update seq-md  ^bytes (-coerce f md-create-fn write-handlers))
        (when-not (empty? r)
          (recur (rest s)))))
    (.digest seq-md)))

(defn ^bytes xor-hashes
  "Commutatively coerces elements of collection, seq entries must already be crypto hashes
  to avoid collisions in XOR. Takes at maximum 32 bytes into account."
  [seq]
  (let [len (min (count  ^bytes (first seq)) max-entropy-byte-count)]
    (reduce (fn [ ^bytes acc  ^bytes elem]
              (loop [i 0]
                (when (< i len)
                  (aset acc i (byte (bit-xor (aget acc i) (aget elem i))))
                  (recur (inc i))))
              acc)
            (byte-array len)
            seq)))

(defn ^bytes encode-safe [^bytes a md-create-fn]
  (if (< (count a) split-size)
    (let [len (long (alength a))
          ea (byte-array len)]
      (loop [i 0]
        (when-not (= i len)
          (let [e (aget a i)]
            (when (and (> e (byte 0))
                       (< e (byte 30)))
              (aset ea i (byte 1))))
          (recur (inc i))))
      #?(:clj (let [out (ByteArrayOutputStream.)]
               (.write out a)
               (.write out ea)
               (.toByteArray out))
         :cljs (.concat a ea)))
    (digest a md-create-fn)))
