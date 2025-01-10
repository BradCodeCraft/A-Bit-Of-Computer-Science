const HashSet = require("../src/hashSet.js");

let hashSet = new HashSet();

hashSet.add('a');
hashSet.add('b');
hashSet.add('c');
hashSet.add('d');
hashSet.add('e');
hashSet.add('f');
hashSet.add('g');
hashSet.add('h');
hashSet.add('i');
hashSet.add('j');
hashSet.add('k');
hashSet.add('l');

test('hash', () => {
  expect(hashSet.hash('a')).toBe(1);
  expect(hashSet.hash('b')).toBe(2);
});


test('add', () => {
  expect(hashSet.add('a')).toBe(false);
});

test('contains', () => {
  expect(hashSet.contains('a')).toBe(true);
  expect(hashSet.contains('m')).toBe(false);
});

test('remove', () => {
  hashSet.remove('a');

  expect(hashSet.contains('a')).toBe(false);
  expect(hashSet.remove('a')).toBe(false);

  hashSet.add('a');
});

test('isEmpty and clear', () => {
  expect(hashSet.isEmpty()).toBe(false);

  hashSet.clear();

  expect(hashSet.isEmpty()).toBe(true);

  hashSet.add('a');
  hashSet.add('b');
  hashSet.add('c');
  hashSet.add('d');
  hashSet.add('e');
  hashSet.add('f');
  hashSet.add('g');
  hashSet.add('h');
  hashSet.add('i');
  hashSet.add('j');
  hashSet.add('k');
  hashSet.add('l');
});

test('iterator', () => {
  let keys = [];

  for (let i = 0; i < hashSet.capacity; i++) {
    let bucket = hashSet.buckets[i];

    if (bucket !== undefined) {
      keys.push(bucket.head().value);
    }
  }

  expect(keys).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
});

test('clone', () => {
  let clone = hashSet.clone();

  expect(clone.size).toBe(12);
  expect(clone.capacity).toBe(16);
  expect(clone).toStrictEqual(hashSet);
})
