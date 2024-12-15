// { } -> block scope
// let, const diye variable declare korle sheta scope er moddhei thake
// var diye declare korle shetar only declaration part hoisting hoye jay r global scope e chole jay.

function func() {
  if (true) {
    var sum = 34;
  }
  console.log(sum); // available cause local scope
}
func();

console.log(sum); // not available cause global scope
console.log(n3);
