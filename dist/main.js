"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
const queue = new Queue();
class Calculator {
    constructor() {
        this.num1 = null;
        this.num2 = null;
        this.sign = "";
    }
    Add() {
        if (typeof this.num1 == "number" && typeof this.num2 == "number")
            return this.num1 + this.num2;
        else
            return "Error";
    }
    Sub() {
        if (typeof this.num1 == "number" && typeof this.num2 == "number")
            return this.num1 - this.num2;
        else
            return "Error";
    }
    Multiply() {
        if (typeof this.num1 == "number" && typeof this.num2 == "number")
            return this.num1 * this.num2;
        else
            return "Error";
    }
    Devide() {
        if (typeof this.num1 == "number" && typeof this.num2 == "number")
            return this.num1 / this.num2;
        else
            return "Error";
    }
    GetSign(s) {
        this.sign = s;
    }
    Clear() {
        this.num1 = null;
        this.num2 = null;
        this.sign = "";
    }
}
let calculator = new Calculator();
let display = document.getElementById("display");
display.value = " ";
function appendToDisplay(value) {
    if (display) {
        display.value += value;
        queue.enqueue(value);
    }
    if (value == " + " || value == " - " || value == " * " || value == " / ") {
        calculator.GetSign(value);
        let x = "";
        while (queue.front() != value && !queue.isEmpty()) {
            x += queue.dequeue();
        }
        queue.dequeue();
        if (calculator.num1 == null)
            calculator.num1 = parseInt(x);
        else
            calculator.num2 = parseInt(x);
    }
    else if (value == "=") {
        let x = "";
        while (queue.front() != value && !queue.isEmpty()) {
            x += queue.dequeue();
        }
        queue.dequeue();
        if (calculator.num1 == null)
            calculator.num1 = parseInt(x);
        else
            calculator.num2 = parseInt(x);
    }
}
function clearDisplay() {
    if (display) {
        display.value = " ";
        calculator.Clear();
    }
}
function calculateResult() {
    appendToDisplay("=");
    if (display) {
        display.value = " ";
        if (calculator.sign == " + ")
            display.value += calculator.Add();
        else if (calculator.sign == " - ")
            display.value += calculator.Sub();
        else if (calculator.sign == " * ")
            display.value += calculator.Multiply();
        else if (calculator.sign == " / ")
            display.value += calculator.Devide();
    }
}
//# sourceMappingURL=main.js.map