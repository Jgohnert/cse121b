// This is how you convert a list of string to show up
// on the HTML page.
const myArray = ['one', 'two', 'three'];

function listTemplate(item) {
    return `<li>${item}</li>`
}

const htmlStrings = myArray.map(listTemplate);
console.log(htmlStrings);

const listElement = document.querySelector('#myList');

listElement.innerHTML = htmlStrings.join('');


const grades = ['A', 'B', 'A', 'C', 'b'];

// This is how you convert something in a listt to something else,
//in this case, A to 4 or C to 2.
function gradeToGpaPoints(grade) {
    let points = 0;
    switch(grade) {
        case 'A':
        case 'a':
            points = 4;
            break;
        case 'B':
        case 'b':
            points = 3;
            break;
        case 'C':
        case 'c':
            points = 2;
            break;
        default:
            points = -1;

    }
    return points;

//     // example 2. This is another way to do the code above using if statements.
// const grades = ["A", "B", "A"];
// function convertGradeToPoints(grade) {
//   let points = 0;
//   if (grade === "A") {
//     points = 4;
//   } else if (grade === "B") {
//     points = 3;
//   }
//   return points;
// }
// const gpaPoints = grades.map(convertGradeToPoints);
}

const myGpaPoints = grades.map(gradeToGpaPoints);
console.log(myGpaPoints);


//Below does the math for your gpa and displays it in the console.

const mygpaPoints = grades.map(gradeToGpaPoints);
const pointsTotal = mygpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / mygpaPoints.length;
console.log(gpa);

// // example 2. Below are other ways of how to do it.
// // this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// // this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


//The below code displays only words that are below 6
//letters in an array.

const foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = foods.filter(function (food) {
    return food.length < 6;
});
console.log(shortWords);


//This code gives you the index of the number you want to find.

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let indexnumber = numbers.indexOf(luckyNumber);

console.log(indexnumber);
