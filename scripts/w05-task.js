/* W05: Programming Tasks */

/* Declare and initialize global variables */

// const imageElement = document.querySelector ("img");

const templesElement = document.querySelector("div");
let templeList = [];
/* async displayTemples Function */
//array1.forEach((element) => console.log(element));


const displayTemples = (temples) => {
    temples.forEach((element) => {
        //Create an HTML <article> element (createElement).
        const myArticle = document.createElement("article");
        //Create an HTML <h3> element and add the temple's templeName property to this new element.
        let myVarH3 = document.createElement("h3");
        myVarH3 = temples.templeName;

        //Create an HTML <img> element and add the temple's imageUrl property to the src attribute and 
        //the temple's location property to the alt attribute.
        const myImg = document.createElement("img");
        //myImg = temples.
        document.getElementsByClassName(myImg).src = temples.imageURL;
        document.getElementsByClassName(myImg).alt = temples.location;

        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        //myArticle.appendChild(myVarH3);
        //myArticle.appendChild(myImg);
        //myArticle.appendChild("h3");
        //myArticle.appendChild(img);
        /**var div = document.createElement('div');
div.appendChild(document.createTextNode('top div')); */

        //myArticle.appendChild(document.getElementsByClassName("h3"));
        myArticle.appendChild(document.getElementsByName(myVarH3));
        //document.getElementsByClassName(myArticle).appendChild(myVarH3);
        //document.getElementsByClassName(myArticle).appendChild(myImg);

        //Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(myArticle);

    });
}


/* async getTemples Function using fetch()*/
/*Convert your fetch response into a JavaScript object (.json) and assign the result 

to the templeList global array variable you declared in Step 3 above. 
Make sure the the execution of the code waits here as well until it finishes. */

const getTemples = async () =>{
    //const results = fetch(url);
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const data = await response.json();
        templeList = data;
    }
    displayTemples (templeList);
}



/* reset Function */
// document.getElementById("myform").reset();
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.


const reset =()=>{
    document.getElementById("myArticle").reset();
}






/* filterTemples Function */
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
        break;

        

        default:
    }


}



getTemples();

/* Event Listener */
