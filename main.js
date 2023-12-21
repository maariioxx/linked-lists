class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.size++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  listSize() {
    return this.size;
  }

  listHead() {
    return this.head.value;
  }

  listTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  at(index) {
    if (index > this.size - 1) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next.value = null;
    current.next = null;
    this.size--;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === value) return count;
      current = current.next;
      count++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      if (current.next === null) string += `( ${current.value} ) -> null`;
      else string += `( ${current.value} ) -> `;
      current = current.next;
    }
    return string;
  }

  insertAt(value, index) {
    let current = this.head;
    let count = 0;
    while (count < index - 1) {
      current = current.next;
      count++;
    }
    let currentNext = current.next;
    current.next = new Node(value);
    current.next.next = currentNext;
  }

  removeAt(index) {
    let current = this.head;
    let count = 0;
    while (count < index - 1) {
      current = current.next;
      count++;
    }
    current.next = current.next.next;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const ll = new LinkedList();
ll.prepend(12);
ll.prepend(14);
ll.prepend(18);
ll.append(21);
ll.removeAt(1);
console.log(ll.toString());
