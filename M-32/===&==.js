// double equal (==) only checks the value but triple equal (===) check value and type
// In double equal, type conversion happens under the hood and it checks if the values are truthy.

const n1 = 1;
const n2 = "1"; // Here, if we put true, the result is same
if (n1 == n2) {
  // saying they are same
  console.log("same");
} else {
  console.log("not same");
}

const n3 = 1;
const n4 = "1";
if (n3 === n4) {
  // saying they are not same
  console.log("same");
} else {
  console.log("not same");
}

if ([] == []) {
  // Here, objects can also be placed and result would be same
  // non-primitive data variables stores memory address which can never be the same
  console.log("same array");
} else {
  console.log("array not same");
}
