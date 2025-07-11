const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(value === 'C'){
            currentInput = '';
            display.textContent = '0';
        } else if (value === '=') {
            try{
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch{
                display.textContent = 'Error';
                currentInput = '';
            }
        } else if (value === '+/-'){
            currentInput = currentInput
            ? (parseFloat(currentInput)*-1).toString()
            :'';
            display.textContent = currentInput || '0';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

        
        