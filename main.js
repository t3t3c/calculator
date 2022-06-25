const calMemory = {
  operand: "",
  operator: "",
  currentResult: "",
};

const add = function (a, b) {
  return Number(a) + Number(b);
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
    case "=":
      return calMemory.currentResult;
  }
};

function clearMemory() {
  calMemory.operand = "";
  calMemory.operator = "";
  calMemory.currentResult = "";
}
// current result = currentresult operator operand

function showResult() {
  let display = document.querySelector(".display");
  display.innerHTML = calMemory.currentResult;
}

function refreshDisplay() {
  let display = document.querySelector(".display");
  display.innerHTML = calMemory.operand;
}

function addNumber(event) {
  calMemory.operand += event.target.dataset.number;
}

function addOperator(event) {
  calMemory.operator = event.target.dataset.operator;
}

// FUNCTIONS FOR BUTTONS:

function activateButtons() {
  let numberButtons = document.querySelectorAll("[data-number]");
  numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      addNumber(event);
      refreshDisplay();
    });
  });
}

function activateClear() {
  let clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", () => {
    clearMemory();
    refreshDisplay();
  });
}

function activateOperators() {
  let operatorButtons = document.querySelectorAll("[data-operator]");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (calMemory.currentResult === "") {
        // it is the first calculation after clear so we don't have a second number to do the calculation yet
        calMemory.currentResult = calMemory.operand; // save the first number as currentResult
      } else {
        // currentResult is always => currentResult = currentResult operator operand
        calMemory.currentResult = operate(
          calMemory.currentResult,
          calMemory.operand,
          calMemory.operator
        );
      }
      addOperator(event); // adds clicked operator for next operation
      calMemory.operand = ""; // reset operand so we can make new one
      showResult();
    });
  });
}

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
// 2. rozwiazac problem uzywajac currying??

// poprzedni numer ma sie wyswietlac tak dlugo jak nie kliknalem nastepnego! gamechanger

// 0 - result
// click 7
// 7 - operand
// click 2
// 72 - operand
// click +
// 72 - result
//click 3
// 3 - operand
//click +
// 75 - result
//click 4
// 4 - operand
// click +
// 79 - result
// click 8
// 8 - operand
// click +
// 87 - result
