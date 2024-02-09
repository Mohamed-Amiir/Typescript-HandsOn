"use strict";
function printInConsole(...[]) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`The Value Is ${arguments[i]} And Type Is ${typeof arguments[i]}`);
    }
    console.log("Done");
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map