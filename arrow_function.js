function sum(a, b) {
  const res = a + b;
  return res;
}
console.log(sum(3, 4));

// Arrow function ------------->>>>>>>>>
const sum1 = (a, b) => a + b;
console.log(sum(4, 5));

const print_value = (a) => a; // when parameter is only one, no need to give parenthesis
console.log(print_value(98));

const just_func = () => {
  // no parameter and curly braces can be used
  console.log("asdfasdf");
  console.log("qwerqwerqwer");
  return 34;
};

console.log(just_func);
