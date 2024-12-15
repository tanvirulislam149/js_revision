// null and undefined 2tai value nai bujhay but there are some differences

// kono kichu define kora na hoile undefined show kore
const arr = [1, 2, 3];
console.log(arr[5]); // shows undefined
const obj = { name: "Shuvo" };
console.log(obj.age); // shows undefined
const func = () => {
  // not written anything
};
console.log(func()); // shows undefined

// ----- kono kichur value nai set korte chaile NULL use korte hoy
const bou = null;
const gf = null;

// type of undefined is undefined but type of null is object
console.log(typeof undefined, typeof null);
