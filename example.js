prompt = require("./node_modules/prompt-promise");

let c = 42;
let anyString = "initial anyString text"

async function fight(){
    console.log("log before prompt");
   anyString = await prompt("input anything it doesnt matter\n");
   console.log("log after prompt");
   const a = 5;
    const b = 10;
    console.log("log before math");
    c = a + b;
    console.log("log after math, new c value");
    console.log(c);
    return c,anyString;
}

fight();
console.log("after fight function");
console.log(c);
console.log(anyString);
console.log("shouldnt the code be done and end?");
