const calMemory = {
  operand: "",
  operator: "",
  currentResult: "",
  hasDot: false,
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
  if (b == "0") {
    return "divBy0";
  }
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
  resetDot();
}
// current result = currentresult operator operand

function showResult() {
  const display = document.querySelector(".display");
  if (calMemory.currentResult === "divBy0") {
    // if divided by 0
    display.innerHTML = "BOOM!";
    clearMemory();
  } else {
    // converts string to a number, rounds the number to fixed number of decimals
    // ex. 0.54 = 0.540000
    // and converts it to number again to drop the unnecessary 0s
    roundedNumber = Number(Number(calMemory.currentResult).toFixed(6));
    display.innerHTML = roundedNumber;
  }
}

function refreshDisplay() {
  const display = document.querySelector(".display");
  display.innerHTML = calMemory.operand;
}

function addNumber(event) {
  calMemory.operand += event.target.dataset.number;
}

function addOperator(event) {
  calMemory.operator = event.target.dataset.operator;
}

function deleteNumber(event) {
  calMemory.operand.slice(-1);
  console.log(calMemory.operand);
}

// FUNCTIONS FOR BUTTONS:

function activateButtons() {
  const numberButtons = document.querySelectorAll("[data-number]");
  numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.dataset.number === ".") event.target.disabled = true;
      // because we can only write one dot per number
      addNumber(event);
      refreshDisplay();
    });
  });
}

function activateClear() {
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", () => {
    clearMemory();
    refreshDisplay();
  });
}

function resetDot() {
  // lets us write dot one more time
  dotButton = document.querySelector(".dot");
  dotButton.disabled = false;
}

function activateOperators() {
  const operatorButtons = document.querySelectorAll("[data-operator]");
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
      resetDot(); // we can write dots again, because it is time for new number
      showResult();
    });
  });
}

function activateBackspace() {
  const backspace = document.querySelector(".backspace");
  backspace.addEventListener("click", () => {
    console.log("ziom");
  });
  refreshDisplay();
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
