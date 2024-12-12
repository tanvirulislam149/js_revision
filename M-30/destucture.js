const obj = { name: "Sakib", age: 23, city: "Ctg" };

const { name, age, city: location } = obj; // city k location nam diye dichi.
console.log(name, age, location);

const arr = [12, 23];
const [first, second] = arr; // array can also be destructured
console.log(first, second);
