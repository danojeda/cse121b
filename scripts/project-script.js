



const questionsElement = document.querySelector("div");
let questionList = [];




let displayQuestions = (questions) =>{

    for (i=0;i < questions.length; i++){
        console.log(questions[i]);
        myQ = document.createElement("h1");
        
        myOption1 = document.createElement("input");
        myOption2 = document.createElement("input");
        myOption3 = document.createElement("input");
        myOption4 = document.createElement("input");    

        myOption1.type="radio";
        myOption2.type="radio";
        myOption3.type="radio";
        myOption4.type="radio";

        myOption1.name="option-q";
        myOption2.name="option-q";
        myOption3.name="option-q";
        myOption4.name="option-q";

        myOption1.id="Opt-A";
        myOption2.id="Opt-B";
        myOption3.id="Opt-C";
        myOption4.id="Opt-D";

        let textNode = document.createElement(questions.Q);
       
        myQ.appendChild(textNode);
        myOption1.value=questions[i].alternatives[0];
        myOption2.value=questions[i].alternatives[1];
        myOption3.value=questions[i].alternatives[2];
        myOption4.value=questions[i].alternatives[3];

        myLabelZero= document.createElement("label");
        myLabel1= document.createElement("label");
        myLabel2= document.createElement("label");
        myLabel3= document.createElement("label");
        myLabel4= document.createElement("label");

        myLabelZero.textContent= questions[i].Q;
        myLabel1.textContent= questions[i].alternatives[0];
        myLabel2.textContent= questions[i].alternatives[1];
        myLabel3.textContent= questions[i].alternatives[2];
        myLabel4.textContent= questions[i].alternatives[3];

        
        console.log(myQ.textNode);

        let myBR = document.createElement('br');
        let myBR2 = document.createElement('br');
        let myBR3 = document.createElement('br');
        let myBR4 = document.createElement('br');
        let myBR5 = document.createElement('br');
        let myBR6 = document.createElement('br');
        let myBR7 = document.createElement('br');

        let myButton = document.createElement("button");
        myButton.innerText="Submit";
        

        questionsElement.appendChild(myLabelZero);
        questionsElement.appendChild(myBR3);
        questionsElement.appendChild(myBR6);
        questionsElement.appendChild(myOption1);
        questionsElement.appendChild(myLabel1);
        questionsElement.appendChild(myBR);
        questionsElement.appendChild(myOption2);
        questionsElement.appendChild(myLabel2);
        questionsElement.appendChild(myBR2);
        questionsElement.appendChild(myOption3);
        questionsElement.appendChild(myLabel3);
        questionsElement.appendChild(myBR4);
        questionsElement.appendChild(myOption4);
        questionsElement.appendChild(myLabel4);
        questionsElement.appendChild(myBR5);
        questionsElement.appendChild(myButton);
        questionsElement.appendChild(myBR6);

              

    }
}





const getQuestions = async () =>{
    
    console.log("Bienvenido a la funcion getQuestions");
    const response = await fetch ("https://danojeda.github.io/cse121b/questionsandanswers.json");
    if (response.ok){
        const data = await response.json();
        questionsList = data;
    } 
    
    displayQuestions(questionsList);

}


const calculateFunction = () =>{
    
    var answer = document.getElementsByName('option-q');

    
    
    
   
    
    
}



getQuestions();

