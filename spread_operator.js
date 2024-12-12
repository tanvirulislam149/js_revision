// spread operator ==> (...)

const max_num = Math.max(45, 56, 67, 32);
console.log(max_num); // output ==> 67
const arr = [23, 43, 34, 45, 432, 56, 5, 4, 78];
console.log(Math.max(arr)); // max function only works on elements, not on an array
console.log(Math.max(...arr)); // using spread operator. It returns only the elements

const arr1 = [2, 3, 4, 5, 6];
const arr2 = arr1;
arr2.push(4545); // this also pushes the value to arr1 cause array works on pointer or memory address

console.log(arr1); // output => [ 2, 3, 4, 5, 6, 4545 ]

const a1 = [2, 3, 4, 5, 6, 7];
const a2 = [...a1]; // copying the values of a1 array to a2
a2.push(9999); // pushes only to a2 cause a2 is a new array made with the elements of a1

console.log(a1); // output ==> [ 2, 3, 4, 5, 6, 7 ]
console.log(a2); //  output ==> [ 2, 3, 4, 5, 6, 7, 9999 ]

const obj = { name: "sakib", age: 23, city: "ctg" };
const obj2 = { ...obj }; // can copy object too
console.log(obj2);
