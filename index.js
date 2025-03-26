let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let sign = "positive";

const number = document.getElementById("number");

const AC = document.getElementById("AC").addEventListener("click", () => number.innerHTML = "");
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
    firstNumber = parseFloat(number.innerHTML);
    operator = "%";
    number.innerHTML = "";
    sign = "positive";
});
const division = document.getElementById("division").addEventListener("click", () => {
    firstNumber = parseFloat(number.innerHTML);
    operator = "/";
    number.innerHTML = "";
    sign = "positive";
});
const multiply = document.getElementById("multiply").addEventListener("click", () => {
    firstNumber = parseFloat(number.innerHTML);
    operator = "*";
    number.innerHTML = "";
    sign = "positive";
});
const subtract = document.getElementById("subtract").addEventListener("click", () => {
    firstNumber = parseFloat(number.innerHTML);
    operator = "-";
    number.innerHTML = "";
    sign = "positive";
});
const add = document.getElementById("add").addEventListener("click", () => {
    firstNumber = parseFloat(number.innerHTML);
    operator = "+";
    number.innerHTML = "";
    sign = "positive";
});

const zero = document.getElementById("zero").addEventListener("click", () => number.innerHTML += "0");
const one = document.getElementById("one").addEventListener("click", () => number.innerHTML += "1");
const two = document.getElementById("two").addEventListener("click", () => number.innerHTML += "2");
const three = document.getElementById("three").addEventListener("click", () => number.innerHTML += "3");
const four = document.getElementById("four").addEventListener("click", () => number.innerHTML += "4");
const five = document.getElementById("five").addEventListener("click", () => number.innerHTML += "5");
const six = document.getElementById("six").addEventListener("click", () => number.innerHTML += "6");
const seven = document.getElementById("seven").addEventListener("click", () => number.innerHTML += "7");
const eight = document.getElementById("eight").addEventListener("click", () => number.innerHTML += "8");
const nine = document.getElementById("nine").addEventListener("click", () => number.innerHTML += "9");

const dot = document.getElementById("dot").addEventListener("click", () => number.innerHTML += ".")
const equal = document.getElementById("equal").addEventListener("click", function(){
    if(operator === "")
    {
        return;
    }
    secondNumber = number.innerHTML === "" ? 0 : parseFloat(number.innerHTML);
    calculate(firstNumber, secondNumber, operator)
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
