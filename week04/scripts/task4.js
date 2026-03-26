/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInformation = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'Joanna Gohnert',

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/imageofmecopy.jpg',

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: [
        'Sushi', 
        'Pizza', 
        'Cheeseburger',
        'Taco',
        'Bread',
        'Chocolate chip cookie'
    ],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [
        'Playing video games',
        'Watching movies',
        'Drawing',
        'playing piano',
        'Stargazing',
        'Airsoft',
        'Disc golf'
    ]
};

// Step 6: Add another property named placesLived with a value of an empty array
myInformation.placesLived = [

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
    {
        place: 'Tampa, FL',
        length: '1 year'
    },
    {
        place: 'Fairfax, MN',
        length: '20 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
];


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInformation.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInformation.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const food = myInformation.favoriteFoods.forEach(foodList);

const hobbie = myInformation.hobbies.forEach(hobbiesElementList);

const lived = myInformation.placesLived.forEach(placesILived);

function foodList(food) {
    let FoodElement = document.createElement('li');
    FoodElement.textContent = food;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(FoodElement);
};

// Step 6: Repeat Step 4 for each hobby in the hobbies property
function hobbiesElementList(hobbie) {
    let hobbieElement = document.createElement('li');
    hobbieElement.textContent = hobbie;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobbieElement);
}

// Step 8: For each object in the <em>placesLived</em> property:
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
function placesILived(lived) {
    let places = document.createElement('dt');
    places.textContent = lived.place;

    document.querySelector('#places-lived').appendChild(places);

    let placesLength = document.createElement('dd');
    placesLength.textContent = lived.length;

    document.querySelector('#places-lived').appendChild(placesLength);
}




