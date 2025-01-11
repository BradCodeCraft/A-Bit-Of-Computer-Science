class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (!arr.length) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }

  insert(value) {
    this.#insertRec(value, this.root);
  }

  #insertRec(value, tree) {
    if (!tree) {
      return new Node(value);
    }

    if (value < tree.value) {
      tree.left = this.#insertRec(value, tree.left);
    } else {
      tree.right = this.#insertRec(value, tree.right);
    }

    return tree;
  }

  delete(value) {
    this.#deleteRec(value, this.root);
  }

  #deleteRec(value, tree) {
    if (!tree) {
      return null;
    }

    if (value < tree.value) {
      tree.left = this.#deleteRec(value, tree.left);
    } else if (value > tree.value) {
      tree.right = this.#deleteRec(value, tree.right);
    } else {
      if (!tree.left) {
        return tree.right;
      } else if (!tree.right) {
        return tree.left;
      }

      tree.value = this.#getSuccessor(tree);
      this.root.value = tree.value;
    }
  };

  #getSuccessor(tree) {
    let current = tree.right;

    while (current.left.left) {
      current = current.left;
    }
    let temp = current.left;
    current.left = null;
    return temp.value;
  }

  find(value) {
    return this.#findRec(value, this.root);
  }

  #findRec(value, tree) {
    if (!tree) return false;

    if (value < tree.value) {
      return this.#findRec(value, tree.left);
    } else if (value > tree.value) {
      return this.#findRec(value, tree.right);
    } else {
      return value === tree.value;
    }
  }

  levelOrder(callback) {
    if (!callback) {
      throw new Error('Callback is required');
    }

    const queue = [this.root];
    const result = [];
    while (queue.length) {
      const current = queue.shift();
      callback(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      result.push(current.value);
    }
    return result;
  }

  inOrder(callback) {
    const arr = []
    this.#inOrderRec(callback, this.root, arr);
    return arr;
  }

  #inOrderRec(callback, tree, arr) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (!tree) return;
    this.#inOrderRec(callback, tree.left, arr);
    callback(tree.value);
    arr.push(tree.value);
    this.#inOrderRec(callback, tree.right, arr);
  };

  preOrder(callback) {
    const arr = [];
    this.#preOrderRec(callback, this.root, arr);
    return arr;
  }

  #preOrderRec(callback, tree, arr) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (!tree) return;
    callback(tree.value);
    arr.push(tree.value);
    this.#preOrderRec(callback, tree.left, arr);
    this.#preOrderRec(callback, tree.right, arr);
  };

  postOrder(callback) {
    const arr = [];
    this.#postOrderRec(callback, this.root, arr);
    return arr;
  }

  #postOrderRec(callback, tree, arr) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (!tree) return;
    this.#postOrderRec(callback, tree.left, arr);
    this.#postOrderRec(callback, tree.right, arr);
    callback(tree.value);
    arr.push(tree.value);
  };

  height(node) {
    if (!node) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    return this.#depthRec(node, this.root);
  }

  #depthRec(node, tree) {
    if (!tree) return -1;

    if (node.value === tree.value) return 0;

    if (node.value < tree.value) {
      return 1 + this.#depthRec(node, tree.left);
    } else {
      return 1 + this.#depthRec(node, tree.right);
    }
  }

  isBalanced() {
    return Math.abs(this.height(this.root.left) - this.height(this.root.right)) <= 1;
  }

  rebalance() {
    const arr = [];
    this.#inOrderRecTraversal(this.root, arr);
    this.root = this.buildTree(arr);
  }

  #inOrderRecTraversal(tree, arr) {
    if (!tree) return;
    this.#inOrderRecTraversal(tree.left, arr);
    arr.push(tree.value);
    this.#inOrderRecTraversal(tree.right, arr);
  }
}

module.exports = Tree;
