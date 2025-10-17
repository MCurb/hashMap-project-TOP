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
    //index = hash function with the key % this.capacity
    let index = this.hash(key) % this.capacity;
    //create the node using the key and the value;
    const node = new Node(key, value);
    //if this.buckets[index] is empty then make it = to the node
    if (this.buckets[index] === undefined) {
      this.buckets[index] = node;
    } else {
      node.next = this.buckets[index];
      this.buckets[index] = node;
    }
    //else make the node.next = this.buckets[index] to make it the new head
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
