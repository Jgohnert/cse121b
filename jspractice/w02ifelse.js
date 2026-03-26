//Below is how you use an if else statement in Javescript.

// Change the numSales number to another number to try it out on the webpage console.
const numSales = 2000

if (numSales <= 50) {
    console.log("Way to few sales");
  } else if (numSales <= 1000) {
    console.log("Average number of sales");
  } else {
    console.log("A good number of sales.");
  }

//Change the grade to get the corresponding point.
//You need the break to stop the program from exacuting the other code.
let grade = "B";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  default:
    gpaPoints = -1;
}

console.log(gpaPoints)