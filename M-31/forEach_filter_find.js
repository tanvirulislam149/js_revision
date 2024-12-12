// forEach => array er proti ta element er upor function run kore but kichu return kore na
const array = [12, 13, 14, 15, 16];
const res = array.forEach((n) => n * 2); // returns nothing so shows nothing
console.log(res); // prints undefined
array.forEach((n) => console.log(n * 2)); // prints the doubled value

// filter => array er proti ta element er ekta condition run kore r jei shob element condition fullfil
// kore tader k ekta return kore. Shows an array
const filter_res = array.filter((n) => n > 14);
console.log(filter_res); // output => [ 15, 16 ]

const friends = ["John", "Tom", "Tony", "Steve", "Peter"];

const filter_friends = friends.filter((f) => {
  const len = f.length;
  if (len > 4) {
    return f;
  }
});

console.log(filter_friends); // [ 'Steve', 'Peter' ]

// find => just like filter but returns only the one and the first element that fullfilled the condition

const find_res = array.find((n) => n > 14); // returns the first element greater than 14
console.log(find_res); // output -> 15
