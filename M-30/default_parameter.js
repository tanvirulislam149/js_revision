function sum(a, b, c = 0, d = 0) {
  // function call e kono parameter na dile eder value 0 set hobe. eta default parameter
  return a + b + c + d;
}

console.log(sum(3, 4));

function test(a = {}, b = [], c = "") {
  // empty array and object o default e set kora jay
  console.log(a, b, c); // if parameter not given, it will be empty
  return;
}

test({ name: "asdf" }, [34, 43], "qwer");
