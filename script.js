const calculatorGrid = document.querySelector('.calculator-grid');
const previousOperation = document.querySelector('.oreviouse-ops');
let currentOperation = document.querySelector('.current-ops');
const Buttons = Array.from(document.querySelectorAll('button'));
const operations = Array.from(document.querySelectorAll('.operation'));
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');


Buttons.forEach(number => {


    number.addEventListener('click', (e) => {

        switch(e.target.innerText)
        {

            case 'AC' : 
            currentOperation.innerText = '';
            break;

            case 'DEL' : 
            currentOperation.innerText = currentOperation.innerText.slice(0, -1);
            break;

            case '=' : 
            currentOperation.innerText = eval(currentOperation.innerText);


            break;

         
            default : 
        currentOperation.innerText += e.target.innerText; 

        equal.addEventListener('click' , () => {
            operations.forEach(operation => {
                operation.disabled = false;

            })
                dot.disabled = false;
            

        })

        if(currentOperation.innerText.toString().includes('.'))
        {
            dot.disabled = true;
        }

        toCheckOperations();

}
        console.log(currentOperation.innerText.toString())
        console.log(currentOperation.innerText.toString().includes('.'))

    })
    })

    

function toCheckOperations() {

    if(currentOperation.innerText.charAt(currentOperation.innerText.length - 1) === '+' 
    || currentOperation.innerText.charAt(currentOperation.innerText.length - 1) === '-' 
    || currentOperation.innerText.charAt(currentOperation.innerText.length - 1) === '/' 
    || currentOperation.innerText.charAt(currentOperation.innerText.length - 1) === '*' 
    ){
        
           dot.disabled = false;
         
        operations.forEach(operation => {
            operation.disabled = true;
        })

}}


