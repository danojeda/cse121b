/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName= "Daniel Ojeda";


let currentYear = new Date().getFullYear();
let profilePicture = 'images/my_picture.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById ('food'); 
const yearElement = document.querySelector ('#year');
const imageElement = document.querySelector ("img");


/* Step 4 - Adding Content */


nameElement.innerHTML = fullName;
nameElement.innerHtml = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${nameElement.innerHtml}`);

/* Step 5 - Array */


let myArray = ['Pastel de Choclo','Empanada','icecream','Asado'];
let newFood = 'hot-dog';
myArray.push(newFood);
foodElement.innerHTML +=`<br>${myArray}`;
myArray.shift();
foodElement.innerHTML +=`<br>${myArray}`;
myArray.pop();
foodElement.innerHTML +=`<br>${myArray}`;




