const obj = {
  name: "Sakib",
  age: 23,
  color: "black",
  city: "ctg",
};

const keys = Object.keys(obj); // returns all the keys of obj in an array
console.log(keys);

const values = Object.values(obj); // returns all the values in an array
console.log(values);

const entries = Object.entries(obj); // returns a key value pair array in another array. 2D array
console.log(entries);

delete obj.age; // deletes age key value from the object

console.log(obj);

// freeze or seal diye kono object er upor kono kaj kora k limit kora jay
