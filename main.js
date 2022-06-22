const calculatorMemory = {
  firstOperand: null,
  secondOperand: null,
  operator: null,
};

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

function displayAdd(event) {
  let display = document.querySelector(".display");
  display.textContent += event.target.dataset.number;
}

function displayClear() {
  let display = document.querySelector(".display");
  display.textContent = "0";
}

function displayResult(result) {
  let display = document.querySelector(".display");
  display.textContent = result;
}

function activateButtons() {
  let numberButtons = document.querySelectorAll("[data-number]");
  numberButtons.forEach((button) => {
    button.addEventListener("click", displayAdd);
  });
}

function activateClear() {
  let clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", displayClear);
}

function activateOperators() {
  let operatorButtons = document.querySelectorAll("[data-operator]");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      chosenOperator = e.target.dataset.operator;
    });
  });
}

// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

console.log(operate(1, 2, "/"));
activateButtons();
activateClear();
activateOperators();

// 1. wyswietl 1sza liczbe
// 2. klinknij operator (wyswietla sie dalej 1sza licza (wynik dotychczasowego klikania))
// 3. kliknij 2ga liczbe (wyswietla sie 2ga liczba)
// 4. kliknij operator (wyswietla sie wynik operacji)
// 5. kliknij 3cia liczbe (wyswietla sie 3cia liczba)

// wybierz liczbe (zachowuje sie na display i zachowaj jako variable)
// kliknij operator (i zachowaj jako wariable)
// kliknij kolejna liczbe

// gameplan:
// 1. rozwiazac problem globalna lista/ ew. obiektem
// 2.1 obejrzec tutorial jak zrobic kalkulator
// 2. rozwiazac problem uzywajac currying??
