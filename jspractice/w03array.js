const fruits = ["Apple", "Banana"];

console.log(fruits.length); // Will show up as 2 on the console
console.log(fruits[0]); // Will show up as "Apple" on the console


// Array constructor with a single parameter.
// Arrays can be created using a constructor with a single number parameter. 
// An array is created with its length property set to that number, and the 
// array elements are empty slots.

const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"


// The Array.from() static method creates a new, 
// shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.from(set));
// [ "foo", "bar", "baz" ]


// Array from a map

const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  console.log(Array.from(mapper.values())); // Shows the value
  // ['a', 'b'];
  
  console.log(Array.from(mapper.keys())); // Shows the key
  // ['1', '2'];


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(Array.from({ length: 5 }, (v, i) => i));
// [0, 1, 2, 3, 4]


// true if value is an Array; otherwise, false. false is always returned 
// if value is a TypedArray instance.

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false


// all following calls return true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));
// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype));

// all following calls return false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
console.log(Array.isArray({ __proto__: Array.prototype }));


// The Array.of() static method creates a new Array instance from 
// a variable number of arguments, regardless of number or type of the arguments.

// The difference between Array.of() and the Array() constructor is in the handling 
// of single arguments: Array.of(7) creates an array with a single element, 7, whereas 
// Array(7) creates an empty array with a length property of 7. (That implies an array 
// of 7 empty slots, not slots with actual undefined values.)

console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []

Array.of(7); // [7]
console.log(Array(7)); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
console.log(Array(1, 2, 3)); // [1, 2, 3]

function NotArray(len) {
    console.log("NotArray called with length", len);
  }
  
  console.log(Array.of.call(NotArray, 1, 2, 3));
  // NotArray called with length 3
  // NotArray { '0': 1, '1': 2, '2': 3, length: 3 }
  
  console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }


// The following example creates a constructor (Tree) and an object 
// of that type (theTree). The example then displays the constructor 
// property for the object theTree.

function Tree(name) {
    this.name = name;
  }
  
const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`);


// The at() method of Array instances takes an integer value and 
// returns the item at that index, allowing for positive and negative 
// integers. Negative integers count back from the last item in the array.

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"


// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'


// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'


const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };
  console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
  console.log(Array.prototype.at.call(arrayLike, 2)); // undefined