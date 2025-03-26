let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let sign = "positive";
let equalPressed = false;
let operatorPressed = false;

const number = document.getElementById("number");

const AC = document.getElementById("AC").addEventListener("click", () => {
    number.innerHTML = "";
    operatorPressed = false;
});
const plusMinus = document.getElementById("plusMinus").addEventListener("click", function(){
    if (sign === "positive") {
        sign = "negative";
        if (number.innerHTML !== "") {
            number.innerHTML = "-" + number.innerHTML;
        }
    } else if (sign === "negative") {
        sign = "positive";
        if (number.innerHTML !== "") {
            number.innerHTML = number.innerHTML.replace("-", "");
        }
    }
});

const percent = document.getElementById("percent").addEventListener("click", () => {
    if (operatorPressed && number.innerHTML !== "") {
        secondNumber = parseFloat(number.innerHTML);
        calculate(firstNumber, secondNumber, operator);
    }
    firstNumber = parseFloat(number.innerHTML);
    operator = "%";
    number.innerHTML = "";
    sign = "positive";
    operatorPressed = true;
});
const division = document.getElementById("division").addEventListener("click", () => {
    if (operatorPressed && number.innerHTML !== "") {
        secondNumber = parseFloat(number.innerHTML);
        calculate(firstNumber, secondNumber, operator);
    }
    firstNumber = parseFloat(number.innerHTML);
    operator = "/";
    number.innerHTML = "";
    sign = "positive";
    operatorPressed = true;
});
const multiply = document.getElementById("multiply").addEventListener("click", () => {
    if (operatorPressed && number.innerHTML !== "") {
        secondNumber = parseFloat(number.innerHTML);
        calculate(firstNumber, secondNumber, operator);
    }
    firstNumber = parseFloat(number.innerHTML);
    operator = "*";
    number.innerHTML = "";
    sign = "positive";
    operatorPressed = true;
});
const subtract = document.getElementById("subtract").addEventListener("click", () => {
    if (operatorPressed && number.innerHTML !== "") {
        secondNumber = parseFloat(number.innerHTML);
        calculate(firstNumber, secondNumber, operator);
    }
    firstNumber = parseFloat(number.innerHTML);
    operator = "-";
    number.innerHTML = "";
    sign = "positive";
    operatorPressed = true;
});
const add = document.getElementById("add").addEventListener("click", () => {
    if (operatorPressed && number.innerHTML !== "") {
        secondNumber = parseFloat(number.innerHTML);
        calculate(firstNumber, secondNumber, operator);
    }
    firstNumber = parseFloat(number.innerHTML);
    operator = "+";
    number.innerHTML = "";
    sign = "positive";
    operatorPressed = true;
});

const zero = document.getElementById("zero").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "0";
        equalPressed = false;
    } else {
        number.innerHTML += "0";
    }
});
const one = document.getElementById("one").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "1";
        equalPressed = false;
    } else {
        number.innerHTML += "1";
    }
});
const two = document.getElementById("two").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "2";
        equalPressed = false;
    } else {
        number.innerHTML += "2";
    }
});
const three = document.getElementById("three").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "3";
        equalPressed = false;
    } else {
        number.innerHTML += "3";
    }
});
const four = document.getElementById("four").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "4";
        equalPressed = false;
    } else {
        number.innerHTML += "4";
    }
});
const five = document.getElementById("five").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "5";
        equalPressed = false;
    } else {
        number.innerHTML += "5";
    }
});
const six = document.getElementById("six").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "6";
        equalPressed = false;
    } else {
        number.innerHTML += "6";
    }
});
const seven = document.getElementById("seven").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "7";
        equalPressed = false;
    } else {
        number.innerHTML += "7";
    }
});
const eight = document.getElementById("eight").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "8";
        equalPressed = false;
    } else {
        number.innerHTML += "8";
    }
});
const nine = document.getElementById("nine").addEventListener("click", () => {
    if (equalPressed) {
        number.innerHTML = "9";
        equalPressed = false;
    } else {
        number.innerHTML += "9";
    }
});

const dot = document.getElementById("dot").addEventListener("click", () => {
    if (!number.innerHTML.includes(".")) {
        if (equalPressed) {
            number.innerHTML = "0.";
            equalPressed = false;
        } else {
            number.innerHTML += ".";
        }
    }
})
const equal = document.getElementById("equal").addEventListener("click", function(){
    if(operator === "")
    {
        return;
    }
    secondNumber = number.innerHTML === "" ? 0 : parseFloat(number.innerHTML);
    calculate(firstNumber, secondNumber, operator)
    equalPressed = true;
    operatorPressed = false;
});

function calculate(firstNumber, secondNumber, operator) {
    let finalNumber;
    
    switch(operator) {
        case '+':
            finalNumber = firstNumber + secondNumber;
            break;
        case '-':
            finalNumber = firstNumber - secondNumber;
            break;
        case '*':
            finalNumber = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber == 0)
            {
                number.innerHTML = "Your mom's weight";
                return;
            }
            finalNumber = firstNumber / secondNumber;
            break;
        case '%':
            finalNumber = firstNumber * (secondNumber / 100);
            break;
        default:
            finalNumber = secondNumber;
    }
    
    number.innerHTML = finalNumber;
    firstNumber = finalNumber;
    operator = "";
}
