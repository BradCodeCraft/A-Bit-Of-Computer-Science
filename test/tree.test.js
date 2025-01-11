const Tree = require("../src/tree.js")

let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);

test('buildTree', () => {
  expect(tree.root.value).toBe(5);
  expect(tree.root.left.value).toBe(3);
  expect(tree.root.right.value).toBe(8);
  expect(tree.root.left.left.value).toBe(2);
  expect(tree.root.left.right.value).toBe(4);
  expect(tree.root.right.left.value).toBe(7);
  expect(tree.root.right.right.value).toBe(9);
  expect(tree.root.left.left.left.value).toBe(1);
  expect(tree.root.right.left.left.value).toBe(6);
});

test('insert', () => {
  tree.insert(10);
  expect(tree.root.right.right.right.value).toBe(10);
});

test('delete', () => {
  tree.delete(5);
  expect(tree.root.value).toBe(6);

  tree.delete(6);
  expect(tree.root.value).toBe(7);
});
