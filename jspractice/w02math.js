let y = 5;
let x = y + 2;
console.log(x);

let z = y - 2;
console.log(z);

let a = 5 * 10;
console.log(a)

let word1 = 'Hello';
let word2 = 'there';
let word3 = word1 + word2;
console.log(word3)

let b = 5;
let c = ++b;
console.log(b)
console.log(c)

let d = 7;
let e = d > 26;
console.log(e)

let f = 7;
let g = f < 26;
console.log(g)

// These would also be true with a double equals
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true

42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false
//note the difference in a double equal comparison
42 == "42"; // true...the string "42" gets coerced into the number 42
"hello" == "Hello"; // false...are you surprised at this one?
1 == true; // true...the boolean value true gets coerced into the number 1
null == undefined; //  true

// In most cases you should use the strict equality (triple equals) for your comparisons. 
// The double equals is helpful when you are comparing two values where the result will be 
// the same whether coercion happens or not, or when you don't care if the value is the same 
// type...sometimes you want things to be coerced.



// <!-- HTML -->
// <label for="age">Enter your Age</label>
// <input id="age" />

// // get age from input
// const age = document.getElementById("age").value; // assume 21 was entered
// // add 10 years
// const agePlus10 = age + 10;
// console.log(agePlus10); // would give something like 2110 (21 + 10)

// Remember that if Javascript is asked to add a string and a number it 
// will coerce the number to be a string. We need to manually change the type 
// to get this to work correctly.

// // get age from input
// const age = document.getElementById("age").value; // assume 21 was entered
// // add 10 years
// const agePlus10 = parseInt(age) + 10;
// console.log(agePlus10); // success! 31