const displayPlace = document.querySelector('.resultDisplay');
let firstNumber;
let secondNumber;
let step = 0;
let operation ;
let result = 0;
let numbersArry = [];
let secondNumberArray = [];


function appendNumber(num){
    displayPlace.value += num;
    if(step ===0 || step === 1){
        numbersArry.push(num);
        step = 1;
        firstNumber = Number(numbersArry.join(''));
        displayPlace.value = firstNumber;
    }
    else if(step === 2){
        secondNumberArray.push(num);
        secondNumber = Number(secondNumberArray.join(''));
        displayPlace.value = secondNumber;
    }
}
function setOperation(op){
    step = 2;
    operation = op;
}
function clearDisplay(){
    displayPlace.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null;
    result = 0;
    numbersArry = [];
    secondNumberArray = [];
}
function calculate(){
    if(operation === '+'){
        result = firstNumber + secondNumber;
        displayPlace.value = result;
    }
    else if(operation === '-'){
        result = firstNumber - secondNumber; 
        displayPlace.value = result;
    }
    else if(operation === '*'){
        result = firstNumber * secondNumber;
        displayPlace.value = result;
    }
    else if(operation === '/'){
        result = firstNumber / secondNumber;
        displayPlace.value = result;
    }
}

