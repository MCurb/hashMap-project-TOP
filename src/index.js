import { HashMap } from './hashmap.js';

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
test.set('really long key to test this', 'value my man');
console.log(test.get('mark'));
console.log(test.has('hat'));
console.log(test.remove('apple'));
console.log(test.remove('fox'));
test.set('elephant', 'light red');
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
