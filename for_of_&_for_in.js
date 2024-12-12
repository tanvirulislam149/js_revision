const arr = [23, 34, 45, 56, 67, 78, 89];

// for (let i = 0; i < arr.length; i++) {   // using for loop
//   console.log(arr[i]);
// }

for (const num of arr) {
  // shortcut of for loop
  console.log(num);
}

const obj = {
  name: "Sakib",
  age: 34,
  city: "Ctg",
};

for (const key in obj) {
  // object er upor for in loop use korte hoy
  const val = obj[key]; // accessing the value
  console.log(key, val);
}
