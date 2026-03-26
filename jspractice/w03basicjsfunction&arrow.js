// function declaration
// A function declaration starts with the function keyword, 
// then a name, then () with zero or more parameters. Then 
// there is a block {} where the code that we want executed 
// when we call the function goes.

// function square(number) {
//     return number * number;
//   }

// function expression
// We can also make an anonymous version of this function. We 
// just leave off the name. We could then assign that anonymous 
// function to a variable (this is called a function expression) 
// or pass it as an argument to a function.

// const square = function (number) {
//     return number * number;
//   };


// An arrow function expression is a compact alternative to a traditional 
// function expression, with some semantic differences and deliberate 
// limitations in usage

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
