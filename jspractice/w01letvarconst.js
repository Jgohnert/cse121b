//The var statement declares function-scoped 
//or globally-scoped variables, optionally initializing each to a value.
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2


//The let declaration declares re-assignable, block-scoped local 
//variables, optionally initializing each to a value.
let y = 1;

if (y === 1) {
  let y = 2;

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 1


//The const declaration declares block-scoped local variables. 
//The value of a constant can't be changed through reassignment 
//using the assignment operator, but if a constant is an object, 
//its properties can be added, updated, or removed.
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42




//Double quotes and single quotes are completely interchangable. 
//Pick one and stick with it. Backticks are used to form what are 
//know as template literal strings These strings have the added feature 
//of allowing the embedding of variables and other bits of code inside of 
//a string with placeholders ${ }. For example we can add variable values 
//into a string with concatination like this:

// const hello = "Hello";
// const world = "World";
// const complexString = hello + " " + world;

//Or we can use a template literal string and do it this way:

// const hello = "Hello";
// const world = "World";
// const complexString = `${hello} ${world}`;
// This becomes particularly helpful when creating strings of HTML to be inserted into the DOM:

// const myArray = ["one", "two", "three"];
// const htmlString = `
// <ol>
//   <li>${myarray[0]}</li>
//   <li>${myarray[1]}</li>
//   <li>${myarray[2]}</li>
// </ol>`;
// Template literals allow for the use of formatting in these cases as well which aids readability.