/* W05: Programming Tasks */
/**Student Name. Daniel Ojeda */

/* Declare and initialize global variables */



const templesElement = document.querySelector("div");
let templeList = [];
/* async displayTemples Function */



const displayTemples = (temples) => {
    
    temples.forEach (function(temple){
        
        let myArticle = document.createElement('article');
        
        let myH3 = document.createElement('h3');
        let textNode = document.createTextNode(temple.templeName);
        myH3.appendChild(textNode);
        
        
        let myImg = document.createElement('img');
        
        //and add the temple's imageUrl property to the src
        let textNode2 = document.createTextNode(temple.imageUrl);
        myImg.src=temple.imageUrl;
        

        //and the temple's location property to the alt attribute.
        myImg.alt=temple.location;
        

        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)

        myArticle.appendChild(myH3);
        myArticle.appendChild(myImg);
        
        templesElement.appendChild(myArticle);

    });
    
}


/* async getTemples Function using fetch()*/
<<<<<<< HEAD

=======
/*Convert your fetch response into a JavaScript object (.json) and assign the result 

to the templeList global array variable you declared in Step 3 above. 
Make sure the the execution of the code waits here as well until it finishes. */
>>>>>>> 68520c35885ff4745079ea20faf0ab1a41b1c90f

const getTemples = async () =>{
    //const results = fetch(url);
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const data = await response.json();
        templeList = data;
    }
    displayTemples (templeList);
<<<<<<< HEAD
    
=======
>>>>>>> 68520c35885ff4745079ea20faf0ab1a41b1c90f
}



/* reset Function */
<<<<<<< HEAD

const reset = fucntion =() => {templesElement.innerHTML=""};
=======
// document.getElementById("myform").reset();
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.


const reset =()=>{
    document.getElementById("myArticle").reset();
}
>>>>>>> 68520c35885ff4745079ea20faf0ab1a41b1c90f






/* filterTemples Function */
<<<<<<< HEAD


const filterTemples = (temples)=>{
    reset();
    var filter = document.getElementById("filtered").value;
    
    switch (filter){
        case "utah":
           var utahTemples = temples.filter(templo => templo.location.includes ("Utah"));
           
           displayTemples (utahTemples);
        break;
        
        case "notutah":
            var notUtahTemples = temples.filter(templo => !templo.location.includes("Utah"));
           
            displayTemples(notUtahTemples);
        break;

        case "older":
            var oldTemples = temples.filter(templo => parseInt(templo.dedicated.substring(0,4)) <1950);
            displayTemples (oldTemples);
        break;

        case "all":
            displayTemples(temples);
=======
//Declare a function expression named filterTemples.
//The function should accept a argument in a parameter named temples.
//In this function, first call the reset function to clear the output.
//Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
//Use a switch statement that uses the filter value as the selector responding to four (4) cases.
/**For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
"utah": filter for temples where the location contains "Utah" as a string.
"notutah": filter for temples where the location does not contain "Utah" as a string.
"older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
"all": no filter. Just use temples as the argument. */

const filterTemples = (temples)=>{
    reset();
    let filter = document.getElementById("filtered").innerHTML.value;

    switch (filter){
        case "utah":

        break;
        
        case "notutah":
        break;

        case "older":
        break;

        case "all":
>>>>>>> 68520c35885ff4745079ea20faf0ab1a41b1c90f
        break;

        

        default:
    }


}



getTemples();

/* Event Listener */
<<<<<<< HEAD
document.querySelector("#filtered").addEventListener("change",() => {filterTemples(templeList)});
=======
>>>>>>> 68520c35885ff4745079ea20faf0ab1a41b1c90f
