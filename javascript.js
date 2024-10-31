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
    '*': multiply,
    '/': divide,
};

function operate(a, b, operator) {
    const operation = operations[operator];
    return operation ? operation(a, b) : null;
};

const container = document.querySelector(".buttons");

// Function to create buttons for calculator
function createButtons() {
    for (let i = 0; i < 4 * 4; i++) {
        const button = document.createElement("div");
          button.classList.add("button", `button-${i + 1}`);
          container.appendChild(button); 
      }
}

createButtons();