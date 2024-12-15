// JavaScript is a dynamic typed programming language

// Primitive data type -> variable holds the value
const num = 34;
const name = "Shuvo";

// Non-primitve data type -> variable holds the memory address
const arr = [34, 45, 556, 67];
const obj = { name: "Shuvo", age: 34 };

let obj2 = obj;
// obj2 = { asdf: "asdf" };  -> shows 2 different object cause obj reassigned
obj2.age = 56; // changes the value in memory address so changes the original value also

console.log(obj, obj2); // output - { name: 'Shuvo', age: 56 } { name: 'Shuvo', age: 56 }
