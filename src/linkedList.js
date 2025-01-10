let Node = require("./node.js");

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.listHead === null) {
      this.listHead = newNode;
      return;
    }

    let current = this.listHead;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.listHead;
    this.listHead = newNode;
  }

  size() {
    let count = 0;
    let current = this.listHead;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let current = this.listHead;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let count = 0;
    let current = this.listHead;

    while (current !== null) {
      if (count === index) {
        return current;
      }

      count++;
      current = current.nextNode;
    }

    return null;
  }

  pop() {
    let current = this.listHead;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    let temp = current.nextNode;
    current.nextNode = null;
    return temp;
  }

  contains(value) {
    let current = this.listHead;

    while (current.nextNode !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let current = this.listHead;

    while (current.nextNode !== null) {
      if (current.value === value) {
        return index;
      }

      index++;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let result = "";
    let current = this.listHead;

    while (current !== null) {
      result += "( " + current.value + " ) -> ";
      current = current.nextNode;
    }

    result += "null";
    return result;
  }

  insertAt(value, index) {
    let currentIndex = 0;
    let newNode = new Node(value);
    let current = this.listHead;

    while (current.nextNode !== null) {
      if (currentIndex === index - 1) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        return;
      }

      currentIndex++;
      current = current.nextNode;
    }
  }

  removeAt(index) {
    let currentIndex = 0;
    let current = this.listHead;

    while (current.nextNode !== null) {
      if (currentIndex === index - 1) {
        let temp = current.nextNode;
        current.nextNode = temp.nextNode;
        return;
      }

      currentIndex++;
      current = current.nextNode;
    }
  }
}

module.exports = LinkedList;
