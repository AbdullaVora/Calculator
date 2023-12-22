const screen = document.getElementById("screen");
let num1;
let oper;
let num2;
let result;

function display(input) {
    screen.value += input;
    num1 += input;
}

function operats(operation) {
    screen.value += operation;
    oper += operation;
}

function calc() {
    let result = screen.value;
    result = eval(result);
    screen.value = result;
}

function clrall() {
    screen.value = "";    
}

function clr() {
     screen.value = screen.value.slice(0,-1);

}
