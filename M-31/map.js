const array = [12, 13, 14, 15, 16, 17];

// map() er vitore whole ekta function likha jay. Function er vitorer kaj shesh kore jeta return korbe
// sheta ekta res nam er ekta array er moddhe store korbe.
const res = array.map((num) => num * 2);
console.log(res);

const res2 = array.map((n) => {
  const res = n + 5;
  return res; // must return something
});
console.log(res2);

const friends = ["John", "Tom", "Tony", "Steve", "Peter"];
const res3 = friends.map((f) => [f.length, f[0]]); // making 2D array
console.log(res3);
