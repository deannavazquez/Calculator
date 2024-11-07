// Basic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
/* const sum = function (array) {
    return array.reduce((total, acc)=> total + acc, 0)
};
 */

// Variables for Calculator operations
let numOne = '';
let numTwo = '';
let operator = '';

// Operator mapping
let operations = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '/': divide,
};

function operate(a, b, operator) {
    const operation = operations[operator];
    return operation ? operation(a, b) : null;
};



// Function to create buttons for calculator
function createCalculatorButtons() {
    const container = document.getElementById("container");
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "C", "0", "=", "+"
    ];

    // Create each button based on the buttons array
    buttons.forEach((text) => {
        const button = document.createElement("div");
        button.classList.add("button");
        button.textContent = text;
        container.appendChild(button);
    });
}

createCalculatorButtons();

