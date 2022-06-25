const calculatorMemory = {
  operand: "",
  operator: "",
  currentResult: "0",
  nowShowResult: false,
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
  if (calculatorMemory.nowShowResult) {
    if (calculatorMemory.currentResult === "0") {
      calculatorMemory.currentResult = "";
    }
    calculatorMemory.currentResult += event.target.dataset.number;
    display.textContent = calculatorMemory.currentResult;
  } else {
    calculatorMemory.operand += event.target.dataset.number;
    display.textContent = calculatorMemory.operand;
  }
}

function displayClear() {
  let display = document.querySelector(".display");
  display.textContent = calculatorMemory.currentResult;
  // resets all memory to default state:
  calculatorMemory.operand = "";
  calculatorMemory.operator = "";
  calculatorMemory.currentResult = "0";
  calculatorMemory.showResult = false;
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
    button.addEventListener("click", (event) => {
      calculatorMemory.operator = event.target.dataset.operator;
      calculatorMemory.nowShowResult = !calculatorMemory.nowShowResult;
    });
  });
}

// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

console.log(operate(1, 2, "/"));
displayClear();
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
