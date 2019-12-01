class Node {
  constructor(value) {
    this.value = value;
    this.node = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);
    this.length++;
    if (!this.head) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return value;
  }

  _find(value, test = this._test) {}

  _test(a, b) {}
  delete(index) {}
  get(index) {}
  _testIndex(search, __, i) {
    return search === i;
  }
}
