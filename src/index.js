class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % this.capacity;
    const node = new Node(key, value);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = node;
    } else {
      node.next = this.buckets[index];
      this.buckets[index] = node;
    }
    //else make the node.next = this.buckets[index] to make it the new head
  }

  get(key) {
    let index = this.hash(key) % this.capacity;
    if (!this.buckets[index]) {
      return null;
    }

    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  has(key) {
    let index = this.hash(key) % this.capacity;
    if (!this.buckets[index]) {
      return false;
    }

    let currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  remove(key) {
    let index = this.hash(key) % this.capacity;
    if (!this.buckets[index]) {
      return false;
    }

    let previousNode = this.buckets[index];

    //Test head first
    if (previousNode.key === key) {
      this.buckets[index] = previousNode.next;
      return true;
    }

    while (previousNode) {
      if (previousNode.next.key === key) {
        previousNode.next = previousNode.next.next;
        return true;
      }
      previousNode = previousNode.next;
    }
    return false;
  }

  length() {
    let keyTotal = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      let item = this.buckets[i];
      while (item) {
        keyTotal++;
        item = item.next;
      }
    }

    return keyTotal;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = null;
    }
  }

  keys() {
    let keysArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      let item = this.buckets[i];
      while (item) {
        keysArray.push(item.key);
        item = item.next;
      }
    }

    return keysArray;
  }

  values() {
    let valuesArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      let item = this.buckets[i];
      while (item) {
        valuesArray.push(item.value);
        item = item.next;
      }
    }

    return valuesArray;
  }

  entries() {
    let entriesArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      let item = this.buckets[i];
      while (item) {
        let entryArr = [item.key, item.value];
        entriesArray.push(entryArr);
        item = item.next;
      }
    }

    return entriesArray;
  }
}

class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');
test.set('mark', 'test colision');
test.set('yunia', 'does it collides?');
test.set('perro', 'hey bro');
console.log(test.buckets);
console.log(test.buckets[10]);
console.log(test.get('mark'));
console.log(test.has('hat'));
console.log(test.remove('apple'));
console.log(test.remove('perro'));
console.log(test.buckets);
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
