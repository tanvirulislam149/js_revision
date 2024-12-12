const user = {
  name: "Sakib",
  address: {
    city: "Ctg",
    country: "Bangladesh",
  },
};

console.log(user.address.city); // Ctg
console.log(user.address.street); // undefined cause street nai (not showing error)
// street er second property access korte chacchi so error -> can't read properties of undefined
// to stop this error, use optional chaining (?) after undefined property
console.log(user.address.street.second); // showing error
console.log(user.address.street?.second); // showing undefined but not error. Code running
