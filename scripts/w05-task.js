/* W05: Programming Tasks */

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

const reset = fucntion =() => {templesElement.innerHTML=""};






/* filterTemples Function */


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
        break;



        default:
    }


}



getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change",() => {filterTemples(templeList)});