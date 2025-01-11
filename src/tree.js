class Node {
  constructor(value) {
    this.value = value || null;
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
}

module.exports = Tree;
