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

  tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('find', () => {
  expect(tree.find(5)).toBe(true);
  expect(tree.find(10)).toBe(false);
})

test('levelOrder', () => {
  expect(tree.levelOrder(function(node) { return node.value; })).toEqual([5, 3, 8, 2, 4, 7, 9, 1, 6]);
});

test('inOrder', () => {
  expect(tree.inOrder(function(node) { return node.value; })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('preOrder', () => {
  expect(tree.preOrder(function(node) { return node.value; })).toEqual([5, 3, 2, 1, 4, 8, 7, 6, 9]);
});

test('postOrder', () => {
  expect(tree.postOrder(function(node) { return node.value; })).toEqual([1, 2, 4, 3, 6, 7, 9, 8, 5]);
});

test('height', () => {
  expect(tree.height()).toBe(0);
  expect(tree.height(tree.root)).toBe(4);
});

test('depth', () => {
  expect(tree.depth(tree.root)).toBe(0);
  expect(tree.depth(tree.root.left.left.left)).toBe(3)
});

test('isBalanced', () => {
  expect(tree.isBalanced()).toBe(true);
  tree.insert(10);
  tree.insert(11);
  tree.insert(12);
  expect(tree.isBalanced()).toBe(false);
});

test('rebalance', () => {
  tree.rebalance();
  expect(tree.isBalanced()).toBe(true);
});
