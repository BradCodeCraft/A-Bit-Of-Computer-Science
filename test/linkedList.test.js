const LinkedList = require("../src/linkedList.js");

test('Append', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.head().value).toBe(1);
})

test('Prepend', () => {
  let linkedList = new LinkedList();

  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);

  expect(linkedList.head().value).toBe(3);
});

test('Size', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.size()).toBe(3);
});

test('Head', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.head().value).toBe(1);
});

test('Tail', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.tail().value).toBe(3);
});

test('At', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.at(1).value).toBe(2);
  expect(linkedList.at(10)).toBe(null);
});

test('Pop', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  linkedList.pop();

  expect(linkedList.size()).toBe(2);
  expect(linkedList.tail().value).toBe(2);
});

test('Contains', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.contains(2)).toBe(true);
  expect(linkedList.contains(10)).toBe(false);
});

test('Find', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.find(2)).toBe(1);
  expect(linkedList.find(10)).toBe(null);
});

test('ToString', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
});

test('InsertAt', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  linkedList.insertAt(10, 1);

  expect(linkedList.at(1).value).toBe(10);
  expect(linkedList.size()).toBe(4);
});

test('RemoveAt', () => {
  let linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);

  linkedList.removeAt(1);

  expect(linkedList.at(1).value).toBe(3);
  expect(linkedList.size()).toBe(3);
});
