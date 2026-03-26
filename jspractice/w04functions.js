// 1. Function Declaration
// function mySuperFunction() {
//   // Do stuff here
// }
// 2. Function Expression
// const mySuperFunction = function () {
//   // Do stuff here
// };
// 3. Arrow Function (Lambda)
// const mySuperFunction = () => {
//   // Do stuff here
// };

// When you pass an object as a parameter, if the function 
// changes the object's properties, that change is visible 
// outside the function, as shown in the following example:
function myFunc(theObject) {
    theObject.make = "Toyota";
}
  
const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};
  
console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"


// When you pass an array as a parameter, if the function changes 
// any of the array's values, that change is visible outside the 
// function, as shown in the following example:

function myFunc2(theArr) {
    theArr[0] = 30;
}
  
const arr = [45];
  
console.log(arr[0]); // 45
myFunc2(arr);
console.log(arr[0]); // 30


// Such a function can be anonymous; it does not have to have a name. 
// For example, the function square could have been defined as:

const square = function (number) {
    return number * number;
};
  
console.log(square(4)); // 16


// However, a name can be provided with a function expression. Providing a name allows 
// the function to refer to itself, and also makes it easier to identify the function 
// in a debugger's stack traces:

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
  
console.log(factorial(3)); // 6


// In the following code, the function receives a function defined by a function expression 
// and executes it for every element of the array received as a second argument:

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
}
  
const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


// A function can call itself. For example, here is a function that computes factorials recursively:

function factorial2(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial2(n - 1);
    }
}

console.log(factorial2(1)); // 1
console.log(factorial2(2)); // 2
console.log(factorial2(3)); // 6
console.log(factorial2(4)); // 24
console.log(factorial2(5)); // 120


// This code runs without any error, despite the square() function being called before it's declared. 
// This is because the JavaScript interpreter hoists the entire function declaration to the top of the 
// current scope, so the code above is equivalent to:

console.log(square2(5)); // 25

function square2(n) {
  return n * n;
}


// Function hoisting only works with function declarations — not with function expressions. The following 
// code will not work:

// console.log(square3(5)); // ReferenceError: Cannot access 'square' before initialization
// const square3 = function (n) {
//   return n * n;
// };


// a function defined in the global scope can access all variables defined in the global scope. A function defined 
// inside another function can also access all variables defined in its parent function, and any other variables to 
// which the parent function has access.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"


// When you use the function expression syntax (with a normal anonymous function OR an arrow function), 
// the use of the function HAS to happen AFTER the function is created.