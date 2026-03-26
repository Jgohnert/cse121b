let medications = {
    "Lactated Ringers": {
      id: "13ab7",
      amount: 100,
      amountType: "L",
      expDate: "12/30/2029",
    },
    Levothyroxine: {
      id: "at342",
      amount: 2000,
      amountType: "ct",
      expDate: "03/18/2021",
    },
    Rosuvastatin: {
      id: "gr5423",
      amount: 1500,
      amountType: "ct",
      expDate: "09/01/2020",
    },
    Albuterol: {
      id: "iuy6532",
      amount: 1325,
      amountType: "ct",
      expDate: "01/01/2023",
    },
    Esomeprazole: {
      id: "mnb78932",
      amount: 23145,
      amountType: "ct",
      expDate: "10/01/2021",
    },
};
//   For-in loop
//   This is NOT the same as the python for-in loop. Its purpose is to iterate over the properties of an object, 
//   allowing you to manipulate or print out the property values associated with each key.
  
let aMedication = medications["Lactated Ringers"];
  for (propertyName in aMedication) {
    console.log(aMedication[propertyName]);
}

// for-off loop
// The for-of loop IS the same as the Python for-in loop. It can, but shouldn't, 
// be used to iterate over the elements of a list, set, map, or other type of data structure. 
// It won't iterate over the properties of a defined object.

let ages = [3, 5, -1];
for (anAge of ages) {
  console.log(anAge);
}

// for loop
// Here is the traditional C-like for loop. If you are looping over an array (the most common thing we do with loops) 
// please don't use this! You should really look at .map, .filter, .reduce or .forEach as they are MUCH better suited 
// to that. Sometimes you just need to do something (not dealing with arrays) a known number of times. The for loop is 
// good for that.

// for(let i = 1, i <=10, i++){
// 	console.log(i)
// }

// While loop
// Like Python's while loop, JavaScript's while loop works with a single boolean logic check to assess the state of your 
// application by assessing one or more boolean logic statements. As long as the logic statements are true, the loop 
// continues looping. Otherwise it stops. This is useful when you need to loop an unknown number of times, but again, 
// you will rarely need to use this loop if you wisely apply map, filter, and reduce.

let total = 0;
while (total < 10) {
  console.log(total);
  total++;
}
