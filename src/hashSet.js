const LinkedList = require("./linkedList.js");

class HashSet {
  constructor() {
    this.size = 0;
    this.capacity = 16;
    this.LOADFACTOR = 0.75;
    this.buckets = new Array(this.capacity).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 97;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  add(key) {
    const index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket === undefined) {
      bucket = new LinkedList();
      bucket.append(key);

      this.size++;
      this.buckets[index] = bucket;
      return;
    }

    return false;
  }

  contains(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    }

    return true;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    }

    this.buckets[index] = undefined;
    this.size--;

    return
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.size = 0;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).map(() => new LinkedList());
  }

  iterator() {
    let keys = [];

    for (let i = 0; i < this.capacity; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        keys.push(bucket.head().value);
      }
    }

    return keys;
  }

  clone() {
    let clone = new HashSet();

    for (let i = 0; i < this.capacity; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        clone.add(bucket.head().value);
      }
    }

    return clone;
  }
}

module.exports = HashSet;
