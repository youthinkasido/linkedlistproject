// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail (val) {
    // 1, 2
    let newNode = new Node (val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail () {
    // 1,2,4,6

    let oldTail = this.tail;

    if (this.length === 0) return;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return oldTail;
    }

    let currentNode = this.head;
    while (true) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        this.length--;
        currentNode.next = null;

        return oldTail;
      }
      currentNode = currentNode.next;
    }
  }

  // TODO: Implement the addToHead method here
  addToHead (val) {
    let newNode = new Node (val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      this.length++;
    }
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead () {
    const head = this.head;
    if (this.length === 0) return;
    // 2, 6, 5
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return head;
    } else {
      this.head = this.head.next;
      this.length--;
      return head;
    }
  }

  // TODO: Implement the contains method here
  contains (target) {
    let currentNode = this.head;
    while (true) {
      if (currentNode === null) return false;
      if (currentNode.value === target) return true;
      currentNode = currentNode.next;
    }
  }
  // 4, 2, 1,2,4,
  // TODO: Implement the get method here
  get (index) {
    if (index >= this.length) return null;
    let currentNode = this.head;
    let idx = 0;
    while (currentNode) {
      if (idx === index) return currentNode;
      currentNode = currentNode.next;
      idx++;
    }
  }

  // TODO: Implement the set method here
  set (index, val) {
    // 1, 4, 6  // 2, 5 // return true;
    if (index >= this.length) return false;
    let currentNode = this.head;
    let idx = 0;
    while (currentNode) {
      if (idx === index) {
        currentNode.value = val;
        return true;
      }
      currentNode = currentNode.next;
      idx++;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert (index, val) {
    const newNode = new Node (val);
    let node = this.get (index - 1);
    let next = node.next;
    newNode.next = next;
    node.next = newNode;

    if (this.length === 0) return false;
  }

  // TODO: Implement the remove method here
  remove (index) {}

  // TODO: Implement the size method here
  size () {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

// 1,5,1,2,3
//

// prev = index-1
// next = index

// prev.next = node
// node.next = node[idx]
