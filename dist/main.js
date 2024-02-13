"use strict";
class Calculator {
    constructor() {
        this.num1 = null;
        this.num2 = null;
        this.sign = "";
    }
    Add() {
        if (this.num1 && this.num2)
            return this.num1 + this.num2;
        else
            return "Error";
    }
    Sub() {
        if (this.num1 && this.num2)
            return this.num1 - this.num2;
        else
            return "Error";
    }
    Multiply() {
        if (this.num1 && this.num2)
            return this.num1 * this.num2;
        else
            return "Error";
    }
    Devide() {
        if (this.num1 != null && this.num2 != null)
            return this.num1 / this.num2;
        else
            return "Error";
    }
    GetSign(s) {
        this.sign = s;
    }
    Clear() {
        this.constructor();
    }
}
let calculator = new Calculator();
let display = document.getElementById("display");
function appendToDisplay(value) {
    if (display) {
        display.value += value;
    }
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        calculator.GetSign(value);
    }
    else {
        if (calculator.num1 == null)
            calculator.num1 = parseInt(value);
        else
            calculator.num2 = parseInt(value);
    }
}
function clearDisplay() {
    if (display) {
        display.value = "";
        calculator.Clear();
    }
}
function calculateResult() {
    appendToDisplay('=');
    if (display) {
        if (calculator.sign == "+")
            display.value += calculator.Add();
        else if (calculator.sign == "-")
            display.value += calculator.Sub();
        else if (calculator.sign == "*")
            display.value += calculator.Multiply();
        else if (calculator.sign == "/")
            display.value += calculator.Devide();
    }
}
//# sourceMappingURL=main.js.map