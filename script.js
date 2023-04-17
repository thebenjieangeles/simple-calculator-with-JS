// const calculator = (() => {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

// console.log(calculator.add(3.5, 5));
// console.log(calculator.sub(3.5, 5));

const numberButtons = document.querySelectorAll(".is-num");
const clearButton = document.querySelector(".is-clear");
const largeDisplay = document.querySelector(".large-display");

let currentInput = "";
let previousInput = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentInput += event.target.textContent;
    largeDisplay.textContent = currentInput;
  });
});

clearButton.addEventListener("click", () => {
  currentInput = "0";
  largeDisplay.textContent = currentInput;
});
