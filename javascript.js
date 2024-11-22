// Calculator operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Variables for calculator
let numOne = "";
let numTwo = "";
let operator = "";
let displayValue = ""; // To hold the current display value

// Operator mapping
const operations = {
  "+": add,
  "-": subtract,
  x: multiply,
  "/": divide,
};

// Function to perform operations
function operate(a, b, operator) {
  const operation = operations[operator];
  return operation ? operation(a, b) : null;
}

// Get the display element
const display = document.querySelector(".display");

// Button labels
const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "C",
  "0",
  "=",
  "+",
];

// Function to create buttons for the calculator
function createCalculatorButtons() {
  const container = document.getElementById("container");

  // Create each button
  buttons.forEach((text) => {
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = text;
    container.appendChild(button);

    // Add event listener to each button
    button.addEventListener("click", () => handleButtonClick(text));
  });
}

// Handle button click events
function handleButtonClick(text) {
  if (!isNaN(text)) {
    // If text is a number
    displayValue += text;
    display.innerHTML = displayValue;
  } else if (text in operations) {
    // If text is an operator
    if (numOne === "") {
      numOne = displayValue; // Store the first number
    } else if (displayValue !== "") {
      // Perform intermediate calculation if numOne and displayValue exist
      numTwo = displayValue;
      const intermediateResult = operate(
        Number(numOne),
        Number(numTwo),
        operator
      );
      numOne = intermediateResult; // Use the result as the next numOne
      display.innerHTML = intermediateResult; // Show intermediate result
    }
    operator = text; // Update the operator
    displayValue = ""; // Reset displayValue for the next input
  } else if (text === "=") {
    if (numOne !== "" && displayValue !== "" && operator) {
      // If we have everything for a calculation
      numTwo = displayValue;
      const result = operate(Number(numOne), Number(numTwo), operator);
      display.innerHTML = result; // Show the final result
      displayValue = ""; // Clear displayValue
      numOne = result; // Store result as numOne for next operation
      numTwo = ""; // Clear numTwo
      operator = ""; // Clear operator
    }
  } else if (text === "C") {
    // If text is clear
    displayValue = "";
    numOne = "";
    numTwo = "";
    operator = "";
    display.innerHTML = "0";
  }
}

// Initialize calculator buttons
createCalculatorButtons();
