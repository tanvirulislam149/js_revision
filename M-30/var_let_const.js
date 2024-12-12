// normal variable declare
var num = 34; // Not allowed in ES6
// variable declaration -->
const num1 = 34;
num = 23; // reassigning const variable is not allowed

let num2 = 45;
num2 = 98; // for reassigning a variable, declare it with "let"

console.log(num2);

const arr = [2, 3, 4, 5, 65];
// arr = [8, 6, 5, 4, 3]; // not allowed cause reassigning const variable. Use let for this
arr[2] = 9999999; // allowed cause just changing one element

const obj = { name: "sakib", age: 34 };
// obj = { name: "Rakib", age: 56 };    // not allowed. Use let
obj["name"] = "rakib"; // allowed
obj.name = "karim"; // allowed

console.log(obj);
