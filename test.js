const calculatorGrid = document.querySelector('.calculator-grid');
let previousOperation = document.querySelector('.previouse-ops');
let firstNumber = document.querySelector('.firstNumber');
let secondNumber = document.querySelector('.secondNumber');
let operator = document.querySelector('.operator');
let resultDisplay = document.querySelector('.result');
const Buttons = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.operation'));
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');
const allClear = document.querySelector('.allclear')

operations.forEach(operation => {
    operation.addEventListener('click' , (e) => {
        operator.innerText = e.target.innerText;
    })
})



Buttons.forEach(button => {
    button.addEventListener('click' , (e) => {

        if(operator.innerText !== ''){
            secondNumber.innerText += e.target.innerText;
        }

        else
        firstNumber.innerText += e.target.innerText;
    })
})



dot.addEventListener('click', (e) => {
    
    if(firstNumber.innerText.includes('.') && e.target.innerText === '.')
            return
        
    else
    firstNumber.innerText += e.target.innerText;


//    switch(secondNumber.innerText.includes('.') && e.target.innerText === '.')
//    {
//     case true:
//         return

//         default : 
//         secondNumber.innerText += e.target.innerText;

//    }

})




equal.addEventListener('click' , () => {
    calculate();
})

function calculate(){

    if(operator.innerText === '+'){
        let result = Number(firstNumber.innerText) + Number(secondNumber.innerText)
        resultDisplay.innerText = result;
    }

    else if(operator.innerText === '-'){
        let result = Number(firstNumber.innerText) - Number(secondNumber.innerText)
        resultDisplay.innerText = result;
    }

   else if(operator.innerText === '*'){
        let result = Number(firstNumber.innerText) * Number(secondNumber.innerText)
        resultDisplay.innerText = result;
    }

    else if(operator.innerText === '/'){
        let result = Number(firstNumber.innerText) / Number(secondNumber.innerText)
        resultDisplay.innerText = result;
    }

}

allClear.addEventListener('click' , () => {

    firstNumber.innerText = '';
    secondNumber.innerText = '';
    operator.innerText = '';
    resultDisplay.innerText = ''

})








    // switch(firstNumber.innerText.includes('.') && e.target.innerText === '.'){
    
    //     case true : 
    //     return

    //     default :
    //         firstNumber.innerText += e.target.innerText;
            
        // switch(secondNumber.innerText.includes('.') && e.target.innerText === '.'){
        //     case true : 
        //     return
    
        //     default :
        //         secondNumber.innerText += e.target.innerText;
        // }
    // }
