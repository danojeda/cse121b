



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
    myQ2Option1.alt = questions[1].alternatives[0];
    console.log(myOption1.alt);
        
    let myQ2Label2 = document.getElementById("myQ2Label2");
    myQ2Label2.innerHTML = questions[1].alternatives[1];
    myQ2Option2.alt = questions[1].alternatives[1];

    let myQ2Label3 = document.getElementById("myQ2Label3");
    myQ2Label3.innerHTML = questions[1].alternatives[2];
    myQ2Option3.alt = questions[1].alternatives[2];
    
    let myQ2Label4 = document.getElementById("myQ2Label4");
    myQ2Label4.innerHTML = questions[1].alternatives[3];
    myQ2Option4.alt = questions[1].alternatives[3];

    //let mySubmit = document.getElementById("mySubmitDef");
    //mySubmit = addEventListener("click",function() {calculateFunction(questions)});


    // third question
    let myQuestion3 = document.getElementById("myQuestion3");
    myQuestion3.innerText = questions[2].Q;
    let myQ3Option1 = document.getElementById("myQ3Option1");
    let myQ3Option2 = document.getElementById("myQ3Option2");
    let myQ3Option3 = document.getElementById("myQ3Option3");
    let myQ3Option4 = document.getElementById("myQ3Option4");
              
    let myQ3Label1 = document.getElementById("myQ3Label1");
    //console.log(questions[0].alternatives[0]);
    //console.log(questions[0].alternatives[1]);
    //console.log(questions[0].alternatives[2]);
    //console.log(questions[0].alternatives[3]);
    myQ3Label1.innerHTML = questions[2].alternatives[0];
    myQ3Option1.alt = questions[2].alternatives[0];
    //console.log(myOption1.alt);
        
    let myQ3Label2 = document.getElementById("myQ3Label2");
    myQ3Label2.innerHTML = questions[2].alternatives[1];
    myQ3Option2.alt = questions[2].alternatives[1];

    let myQ3Label3 = document.getElementById("myQ3Label3");
    myQ3Label3.innerHTML = questions[2].alternatives[2];
    myQ3Option3.alt = questions[2].alternatives[2];
    
    let myQ3Label4 = document.getElementById("myQ3Label4");
    myQ3Label4.innerHTML = questions[2].alternatives[3];
    myQ3Option4.alt = questions[2].alternatives[3];




     // fourth question
     let myQuestion4 = document.getElementById("myQuestion4");
     myQuestion4.innerText = questions[3].Q;
     let myQ4Option1 = document.getElementById("myQ4Option1");
     let myQ4Option2 = document.getElementById("myQ4Option2");
     let myQ4Option3 = document.getElementById("myQ4Option3");
     let myQ4Option4 = document.getElementById("myQ4Option4");
               
     let myQ4Label1 = document.getElementById("myQ4Label1");
     
     myQ4Label1.innerHTML = questions[3].alternatives[0];
     myQ4Option1.alt = questions[3].alternatives[0];
     
         
     let myQ4Label2 = document.getElementById("myQ4Label2");
     myQ4Label2.innerHTML = questions[3].alternatives[1];
     myQ4Option2.alt = questions[3].alternatives[1];
 
     let myQ4Label3 = document.getElementById("myQ4Label3");
     myQ4Label3.innerHTML = questions[3].alternatives[2];
     myQ4Option3.alt = questions[3].alternatives[2];
     
     let myQ4Label4 = document.getElementById("myQ4Label4");
     myQ4Label4.innerHTML = questions[3].alternatives[3];
     myQ4Option4.alt = questions[3].alternatives[3];
 

   
    
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

    let myScore=0;
    //let myCorrect1 = 
    let myElement = document.getElementsByName("Alternatives1");
    //console.log("declare mi myElement");
    //let myElement2 = document.getElementsByName("Alternatives2");

    //if (myElement.myOption1.checked){
    if (myElement[0].checked){
        
        //alert(`You have selected the first option`);
        //console.log("selected q1 a1");
        //console.log(myElement[0].);
        //console.log(myElement[0].alt);
        if (myElement[0].alt  == questionsList[0].correct){
            console.log("la 1 es correcta");
            myScore = myScore +1;
        }
        //console.log("");
    }else if (myElement[1].checked){
        //alert(`You have selected the second option`);
        //console.log("selected q1 a2");
        if (myElement[1].alt  == questionsList[0].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement[2].checked){
        //alert(`You have selected the third option`);
        //console.log("selected q1 a3");
        if (myElement[2].alt  == questionsList[0].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement[3].checked){
        //alert(`You have selected the fourth option`);
        //console.log("selected q1 a4");
        if (myElement[3].alt  == questionsList[0].correct){
            
            myScore = myScore +1;
        }
    }

    //evaluating question #2:

    //console.log(questions);
    let myElement2 = document.getElementsByName("Alternatives2");
    if (myElement2[0].checked){
        
        //alert(`You have selected the first option`);
        //console.log("selected q2 a1");
        //console.log("");
        if (myElement2[0].alt  == questionsList[1].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement2[1].checked){
        //alert(`You have selected the second option`);
        //console.log("selected q2 a2");
        if (myElement2[1].alt  == questionsList[1].correct){
            
            myScore = myScore +1;
        }
        
    }else if (myElement2[2].checked){
        //alert(`You have selected the third option`);
        //console.log("selected q2 a3");
        if (myElement2[2].alt  == questionsList[1].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement2[3].checked){
        //alert(`You have selected the fourth option`);
        //console.log("selected q2 a4");
    }
    if (myElement2[3].alt  == questionsList[1].correct){
            
        myScore = myScore +1;
    }
   
    console.log(myScore);

    //evaluating question #3:
    let myElement3 = document.getElementsByName("Alternatives3");
    if (myElement3[0].checked){
        
        //alert(`You have selected the first option`);
        //console.log("selected q2 a1");
        //console.log("");
        if (myElement3[0].alt  == questionsList[2].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement3[1].checked){
        //alert(`You have selected the second option`);
        //console.log("selected q2 a2");
        if (myElement3[1].alt  == questionsList[2].correct){
            
            myScore = myScore +1;
        }
        
    }else if (myElement3[2].checked){
        //alert(`You have selected the third option`);
        //console.log("selected q2 a3");
        if (myElement3[2].alt  == questionsList[2].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement3[3].checked){
        //alert(`You have selected the fourth option`);
        //console.log("selected q2 a4");
    }
    if (myElement3[3].alt  == questionsList[2].correct){
            
        myScore = myScore +1;
    }
   
    console.log(myScore);


    //evaluating question #4:
    let myElement4 = document.getElementsByName("Alternatives4");
    if (myElement4[0].checked){
        
        //alert(`You have selected the first option`);
        //console.log("selected q2 a1");
        //console.log("");
        if (myElement4[0].alt  == questionsList[3].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement4[1].checked){
        //alert(`You have selected the second option`);
        //console.log("selected q2 a2");
        if (myElement4[1].alt  == questionsList[3].correct){
            
            myScore = myScore +1;
        }
        
    }else if (myElement4[2].checked){
        //alert(`You have selected the third option`);
        //console.log("selected q2 a3");
        if (myElement4[2].alt  == questionsList[3].correct){
            
            myScore = myScore +1;
        }
    }else if (myElement4[3].checked){
        //alert(`You have selected the fourth option`);
        //console.log("selected q2 a4");
    }
    if (myElement4[3].alt  == questionsList[3].correct){
            
        myScore = myScore +1;
    }
   
    console.log(myScore);

    document.getElementById("Final Score").innerHTML = `Your Final Score is: ${myScore} out of ${questionsList.length}`;


}



getQuestions();
