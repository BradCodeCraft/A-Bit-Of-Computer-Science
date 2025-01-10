const LinkedList = require('./linkedList.js');

class HashMap {
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

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket === undefined) {
      bucket = new LinkedList();
      bucket.append(key);
      bucket.append(value);

      this.size++;
      this.buckets[index] = bucket;

      if (this.size >= this.capacity * this.LOADFACTOR) {
        this.resize();
      }
    } else {
      bucket.pop();
      bucket.append(value);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return null;
    }

    if (bucket.head().value === key) {
      return bucket.tail().value;
    }
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    }

    return (bucket.head().value === key);
  }

  remove(key) {
    const index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    }

    if (bucket.head().value === key) {
      this.buckets[index] = undefined;
      this.size--;
      return true;
    }
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).map(() => new LinkedList());
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.capacity; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        keys.push(bucket.head().value);
      }
    }

    return keys;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.capacity; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        values.push(bucket.tail().value);
      }
    }

    return values;
  }

  entries() {
    let entries = [];

    for (let i = 0; i < this.capacity; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        entries.push([bucket.head().value, bucket.tail().value]);
      }
    }

    return entries;
  }

  resize() {
    this.capacity *= 2;
    this.size = 0;
    let oldBuckets = this.buckets;
    this.buckets = new Array(this.capacity).map(() => new LinkedList());

    for (let i = 0; i < oldBuckets.length; i++) {
      let bucket = oldBuckets[i];

      if (bucket !== undefined) {
        this.set(bucket.head().value, bucket.tail().value);
      }
    }
  }
}

module.exports = HashMap;
