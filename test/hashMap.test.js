const HashMap = require('../src/hashMap.js');


let hashMap = new HashMap();

hashMap.set('a', 1);
hashMap.set('b', 2);
hashMap.set('c', 3);
hashMap.set('d', 4);
hashMap.set('e', 5);
hashMap.set('f', 6);
hashMap.set('g', 7);
hashMap.set('h', 8);
hashMap.set('i', 9);
hashMap.set('j', 10);
hashMap.set('k', 11);
hashMap.set('l', 12);

test('hash', () => {
  expect(hashMap.hash('a')).toBe(1);
  expect(hashMap.hash('b')).toBe(2);
});


test('get', () => {
  expect(hashMap.get('a')).toBe(1);
  expect(hashMap.get('b')).toBe(2);
  expect(hashMap.get('c')).toBe(3);
  expect(hashMap.get('d')).toBe(4);
  expect(hashMap.get('e')).toBe(5);
  expect(hashMap.get('m')).toBe(null);
});

test('has', () => {
  expect(hashMap.has('a')).toBe(true);
  expect(hashMap.has('b')).toBe(true);
  expect(hashMap.has('c')).toBe(true);
  expect(hashMap.has('d')).toBe(true);
  expect(hashMap.has('e')).toBe(true);
  expect(hashMap.has('m')).toBe(false);
});

test('remove', () => {
  hashMap.remove('a');

  expect(hashMap.has('a')).toBe(false);
  expect(hashMap.remove('a')).toBe(false);

  hashMap.set('a', 1);
});

test('length', () => {
  expect(hashMap.size).toBe(12);

  hashMap.remove('a');

  expect(hashMap.size).toBe(11);

  hashMap.set('a', 1);
})

test('clear', () => {
  hashMap.clear();

  expect(hashMap.size).toBe(0);

  hashMap.set('a', 1);
  hashMap.set('b', 2);
  hashMap.set('c', 3);
  hashMap.set('d', 4);
  hashMap.set('e', 5);
  hashMap.set('f', 6);
  hashMap.set('g', 7);
  hashMap.set('h', 8);
  hashMap.set('i', 9);
  hashMap.set('j', 10);
  hashMap.set('k', 11);
  hashMap.set('l', 12);
});

test('keys', () => {
  expect(hashMap.keys()).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
});

test('values', () => {
  expect(hashMap.values()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('entries', () => {
  expect(hashMap.entries()).toEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7], ['h', 8], ['i', 9], ['j', 10], ['k', 11], ['l', 12]]);
});

test('resize', () => {
  hashMap.set('m', 13);

  expect(hashMap.capacity).toBe(32);
  expect(hashMap.size).toBe(13);
});
