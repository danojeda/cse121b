



const questionsElement = document.querySelector("div");
let questionsList = [];


const getQuestions = async () =>{
    
   
    const response = await fetch ("https://danojeda.github.io/cse121b/questionsandanswers.json");
    if (response.ok){
        const data = await response.json();
        questionsList = data;
    } 
    
    displayQuestions(questionsList);

}






let displayQuestions = (questions) =>{

    
    //    console.log(questions[i]);
    let myQuestion = document.getElementById("myQuestion1");
    myQuestion.innerText = questions[0].Q;
    let myOption1 = document.getElementById("myQ1Option1");
    let myOption2 = document.getElementById("myQ1Option2");
    let myOption3 = document.getElementById("myQ1Option3");
    let myOption4 = document.getElementById("myQ1Option4");
              
    let myLabel1 = document.getElementById("myQ1Label1");
    /*console.log(questions[0].alternatives[0]);
    console.log(questions[0].alternatives[1]);
    console.log(questions[0].alternatives[2]);
    console.log(questions[0].alternatives[3]);*/
    myLabel1.innerHTML = questions[0].alternatives[0];
    myOption1.alt = questions[0].alternatives[0];
    console.log(myOption1.alt);
        
    let myLabel2 = document.getElementById("myQ1Label2");
    myLabel2.innerHTML = questions[0].alternatives[1];
    myOption2.alt = questions[0].alternatives[1];
    console.log(myOption2.alt);
    //myOption1.innerText=questions[0].

    let myLabel3 = document.getElementById("myQ1Label3");
    myLabel3.innerHTML = questions[0].alternatives[2];
    myOption3.alt = questions[0].alternatives[2];
    console.log(myOption3.alt);

    let myLabel4 = document.getElementById("myQ1Label4");
    myLabel4.innerHTML = questions[0].alternatives[3];
    myOption4.alt = questions[0].alternatives[3];
    console.log(myOption4.alt);

    let myCorrect1 = questions[0].Correct;
    console.log(myCorrect1);


    //second question:

    let myQuestion2 = document.getElementById("myQuestion2");
    myQuestion2.innerText = questions[1].Q;
    let myQ2Option1 = document.getElementById("myQ2Option1");
    let myQ2Option2 = document.getElementById("myQ2Option2");
    let myQ2Option3 = document.getElementById("myQ2Option3");
    let myQ2Option4 = document.getElementById("myQ2Option4");
              
    let myQ2Label1 = document.getElementById("myQ2Label1");
    //console.log(questions[0].alternatives[0]);
    //console.log(questions[0].alternatives[1]);
    //console.log(questions[0].alternatives[2]);
    //console.log(questions[0].alternatives[3]);
    myQ2Label1.innerHTML = questions[1].alternatives[0];
        
    let myQ2Label2 = document.getElementById("myQ2Label2");
    myQ2Label2.innerHTML = questions[1].alternatives[1];

    let myQ2Label3 = document.getElementById("myQ2Label3");
    myQ2Label3.innerHTML = questions[1].alternatives[2];

    let myQ2Label4 = document.getElementById("myQ2Label4");
    myQ2Label4.innerHTML = questions[1].alternatives[3];

    //let mySubmit = document.getElementById("mySubmitDef");
    //mySubmit = addEventListener("click",function() {calculateFunction(questions)});

   
    
}

/*

function calculateFunction  () {
    
    if (myOption1.checked){
        
        alert(`You have selected the first option`);
        console.log("selected q1 a1");
        //console.log("");
    }else if (myOption2.checked){
        alert(`You have selected the second option`);
        console.log("selected q1 a2");
    }else if (myOption3.checked){
        alert(`You have selected the third option`);
        console.log("selected q1 a3");
    }else if (myOption4.checked){
        alert(`You have selected the fourth option`);
        console.log("selected q1 a4");
    }
   
     
}*/

/** var type = document.querySelector('input[name="type"]:checked').value

console.log(type); */


let calculateFunction =async  (questions)=> {
    console.log("llegue a la funcion");
    const response = await fetch ("https://danojeda.github.io/cse121b/questionsandanswers.json");
    if (response.ok){
        const data = await response.json();
        questionsList = data;
    } 


    //let myCorrect1 = 
    let myElement = document.getElementsByName("Alternatives1");
    console.log("declare mi myElement");
    //if (myElement.myOption1.checked){
    if (myElement[0].checked){
        
        //alert(`You have selected the first option`);
        console.log("selected q1 a1");
        //console.log(myElement[0].);
        console.log(myElement[0].alt);
        if (myElement[0].alt  == questionsList[0].correct){
            console.log("la 1 es correcta");
        }
        //console.log("");
    }else if (myElement[1].checked){
        //alert(`You have selected the second option`);
        console.log("selected q1 a2");
    }else if (myElement[2].checked){
        //alert(`You have selected the third option`);
        console.log("selected q1 a3");
    }else if (myElement[3].checked){
        //alert(`You have selected the fourth option`);
        console.log("selected q1 a4");
    }

    //console.log(questions);
    let myElement2 = document.getElementsByName("Alternatives1");
    if (myElement2[0].checked){
        
        //alert(`You have selected the first option`);
        console.log("selected q2 a1");
        //console.log("");
    }else if (myElement2[1].checked){
        //alert(`You have selected the second option`);
        console.log("selected q2 a2");
    }else if (myElement2[2].checked){
        //alert(`You have selected the third option`);
        console.log("selected q2 a3");
    }else if (myElement2[3].checked){
        //alert(`You have selected the fourth option`);
        console.log("selected q2 a4");
    }
   
     
}



getQuestions();
