// Zero, null, undefined and value na thakle sheta falsy value
// One, value thakle and empty array, object truthy value

if (0) {
  // condition is false cause 0 is a falsy value
  console.log(false);
} else {
  console.log(true); // logs this one
}

if ({}) {
  console.log(false);
} else {
  console.log(true);
}
