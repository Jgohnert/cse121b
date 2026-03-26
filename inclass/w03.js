
// function declaration 
function myfunc(){

}

// function expression 
const double = function (num) {
    return num * 2;
}

// this arrow => means return. It is a function
const double2 = (num) => num * 2

const myArray = [1, 2, 3]

// This function doubles the numbers in the list above to [2, 4, 6]

function loopy(callback) {
    for(let i = 0; i < myArray.length; i ++ ) {
        console.log(callback(myArray[i]));
    }
}

loopy(double);
myArray.forEach(double);