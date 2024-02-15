class Queue<T> {
  private items: T[];

  constructor() {
      this.items = [];
  }

  push(element: T): void {
      this.items.push(element);
  }

  pop(): T | undefined {
      return this.items.pop();
  }

  peek(): T | undefined {
      return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
      return this.items.length === 0;
  }

  size(): number {
      return this.items.length;
  }

  clear(): void {
      this.items = [];
  }
}


class Calculator {
  num1: number | null;
  num2: number | null;
  sign: string;

  constructor() {
    this.num1 = null;
    this.num2 = null;
    this.sign = "";
  }

  Add(): number | string {
    if (typeof this.num1 == "number" && typeof this.num2 == "number")
      return this.num1 + this.num2;
    else return "Error";
  }
  Sub(): number | string {
    if (typeof this.num1 == "number" && typeof this.num2 == "number")
      return this.num1 - this.num2;
    else return "Error";
  }
  Multiply(): number | string {
    if (typeof this.num1 == "number" && typeof this.num2 == "number")
      return this.num1 * this.num2;
    else return "Error";
  }
  Devide(): number | string {
    if (typeof this.num1 == "number" && typeof this.num2 == "number")
      return this.num1 / this.num2;
    else return "Error";
  }

  GetSign(s: string) {
    this.sign = s;
  }
  Clear() {
    this.num1 = null;
    this.num2 = null;
    this.sign = "";
  }
}
let stack = new Queue();
let calculator = new Calculator();
// console.log(calculator.Add());
// calculator.num1 = 8;
// console.log(calculator.Add())
let display: HTMLInputElement | null = document.getElementById(
  "display"
) as HTMLInputElement;
display.value = " ";
function appendToDisplay(value: string) {
  if (display) {
    display.value += value;
  }
  if (value == " + " || value == " - " || value == " * " || value == " / ") {
    calculator.GetSign(value);
  } else {
    if (calculator.num1 == null) calculator.num1 = parseInt(value);
    else calculator.num2 = parseInt(value);
  }
}

function clearDisplay() {
  if (display) {
    display.value = " ";
    calculator.Clear();
  }
}

function calculateResult() {
  // if (display) {
  //   try {
  //     display.value = eval(display.value);
  //   } catch (error) {
  //     display.value = "Error";
  //   }
  // }
  if (display) {
    display.value = " ";
    if (calculator.sign == " + ") display.value += calculator.Add();
    else if (calculator.sign == " - ") display.value += calculator.Sub();
    else if (calculator.sign == " * ") display.value += calculator.Multiply();
    else if (calculator.sign == " / ") display.value += calculator.Devide();
  }
}

// let rect = new Rectangle(5, 10);
// console.log(rect.calculateArea()); // Output: 50
