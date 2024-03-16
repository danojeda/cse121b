/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1,number2){
    return number1 + number2;
}


function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const substract = function (number1,number2){
    return number1 - number2;
}
const substractNumbers = function (){
    let substractNumber1 = Number (document.querySelector('#subtract1').value);
    let substractNumber2 = Number (document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(substractNumber1, substractNumber2 );
}

document.querySelector('#subtractNumbers').addEventListener('click', substractNumbers);


/* Arrow Function - Multiply Numbers */


let multiply = (factor1, factor2)  => factor1 * factor2;
let multiplyNumbers = () => {
    let factor1 = Number (document.querySelector('#factor1').value);
    let factor2 = Number (document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply (factor1,factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);



/* Open Function Use - Divide Numbers */



let divide = (dividend, divisor) => dividend / divisor ;
let divideNumbers = ()  => {
    let dividend = Number (document.querySelector ('#dividend').value);
    let divisor = Number (document.querySelector ('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);




/* Decision Structure */




function myGetTotal ()  {
    let varSubTotal = 0;
    varSubTotal = document.querySelector('#subtotal').value;
    if (document.querySelector('#member').checked == true ){
        varSubTotal = varSubTotal * 0.8;
    }
    
    varSubTotal = varSubTotal.toFixed (2);
    document.querySelector('#total').innerHTML = varSubTotal.toString();
}

document.querySelector('#getTotal').addEventListener('click',myGetTotal );



/* ARRAY METHODS - Functional Programming */

let myNumbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').innerHTML = myNumbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = myNumbersArray.filter(myElement  =>  myElement % 2 != 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = myNumbersArray.filter (myElement => myElement %2 === 0);



/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = myNumbersArray.reduce ( (sum, number) => sum + number);




/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = myNumbersArray.map( number => number * 2 );



/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = myNumbersArray.map(number => number * 2).reduce ((sum,number) => sum + number);

