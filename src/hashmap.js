export class HashMap {
  #loadFactor;
  #capacity;
  #buckets;
  #totalEntries;

  constructor(capacity = 16, loadFactor = 0.75) {
    if (capacity <= 0) throw new Error('Capacity must be greater than 0');
    if (loadFactor <= 0 || loadFactor > 1)
      throw new Error('Load factor must be between 0 and 1');

    this.#loadFactor = loadFactor;
    this.#capacity = capacity;
    this.#buckets = new Array(this.#capacity);
    this.#totalEntries = 0;
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  #checkBounds(index) {
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  #rehashEverything(entriesArr) {
    entriesArr.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  #resizeIfNeeded() {
    const entries = this.entries();
    this.#capacity *= 2;
    this.#buckets = new Array(this.#capacity);
    this.#totalEntries = 0;
    this.#rehashEverything(entries);
  }

  set(key, value) {
    if (this.#totalEntries >= this.#capacity * this.#loadFactor) {
      this.#resizeIfNeeded();
    }

    const index = this.#hash(key);
    this.#checkBounds(index);
    let currentNode = this.#buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    const node = new Node(key, value);

    if (this.#buckets[index] === undefined) {
      this.#buckets[index] = node;
    } else {
      node.next = this.#buckets[index];
      this.#buckets[index] = node;
    }

    this.#totalEntries++;
  }

  get(key) {
    const index = this.#hash(key);
    let currentNode = this.#buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  has(key) {
    const keyExists = this.get(key);
    return keyExists === null ? false : true;
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }

    const index = this.#hash(key);
    this.#checkBounds(index);
    let previousNode = this.#buckets[index];

    //Test head first
    if (previousNode.key === key) {
      this.#buckets[index] = previousNode.next;
      this.#totalEntries--;
      return true;
    }

    while (previousNode.next) {
      if (previousNode.next.key === key) {
        previousNode.next = previousNode.next.next;
        this.#totalEntries--;
        return true;
      }
      previousNode = previousNode.next;
    }
  }

  length() {
    return this.#totalEntries;
  }

  clear() {
    for (let i = 0; i < this.#buckets.length; i++) {
      this.#buckets[i] = null;
      this.#totalEntries = 0;
    }
  }

  keys() {
    let keysArray = [];

    for (let i = 0; i < this.#buckets.length; i++) {
      let item = this.#buckets[i];
      while (item) {
        keysArray.push(item.key);
        item = item.next;
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.#buckets.length; i++) {
      let item = this.#buckets[i];
      while (item) {
        valuesArray.push(item.value);
        item = item.next;
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let i = 0; i < this.#buckets.length; i++) {
      let item = this.#buckets[i];
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
