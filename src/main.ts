class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
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

const queue = new Queue<any>();

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

let calculator = new Calculator();

let display: HTMLInputElement | null = document.getElementById(
  "display"
) as HTMLInputElement;
display.value = " ";

function appendToDisplay(value: string) {
  if (display) {
    display.value += value;
    queue.enqueue(value);
  }
  if (value == " + " || value == " - " || value == " * " || value == " / ") {
    calculator.GetSign(value);
    let x: string = "";
    while (queue.front() != value && !queue.isEmpty()) {
      x += queue.dequeue();
    }
    queue.dequeue();
    if (calculator.num1 == null) calculator.num1 = parseInt(x);
    else calculator.num2 = parseInt(x);
  } else if (value == "=") {
    let x: string = "";
    while (queue.front() != value && !queue.isEmpty()) {
      x += queue.dequeue();
    }
    queue.dequeue();
    if (calculator.num1 == null) calculator.num1 = parseInt(x);
    else calculator.num2 = parseInt(x);
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
  appendToDisplay("=");
  if (display) {
    display.value = " ";
    if (calculator.sign == " + ") display.value += calculator.Add();
    else if (calculator.sign == " - ") display.value += calculator.Sub();
    else if (calculator.sign == " * ") display.value += calculator.Multiply();
    else if (calculator.sign == " / ") display.value += calculator.Devide();
  }
}
