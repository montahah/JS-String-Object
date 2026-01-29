const mobile = {
  brand: "samsung",
  price: 20000,
  color: "black",
};
// for of :array
// for in : object
for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}
