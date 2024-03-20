/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let  myProfile ={
    name:"Daniel Ojeda",
    photo: 'images/my_picture.jpg',
    favoriteFoods: ['Pastel de Choclo','Empanada','Icecream','Asado'],
    hobbies: ['sleeping', 'reading', 'thinking about learning piano'],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */




myProfile.placesLived.push(
    {
        place:'Argentina',
        length:'2 years'
    },
    {   
        place:'Sweden',
        length: '2 years'

    },
    {
        place:'Santiago',
        length: '5 years'
    }
);



/* DOM Manipulation - Output */



/* Name */


document.querySelector('#name').textContent = myProfile.name;



/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo; 


document.querySelector('#photo').alt = myProfile.name; 

/* Favorite Foods List*/


myProfile.favoriteFoods.forEach( food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});





/* Hobbies List */


myProfile.hobbies.forEach (hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});





/* Places Lived DataList */


myProfile.placesLived.forEach ( country => {
    let dte  = document.createElement('dt');
    dte.textContent = country.place;
    let dde = document.createElement('dd');
    dde.textContent = country.length;
    document.querySelector('#places-lived').append(dte,dde);
});


