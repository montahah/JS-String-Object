// // Task1;
// const colors = {
//   red: "#FF0000",
//   green: "#00FF00",
//   blue: "#0000FF",
//   "Goldern Rod": "#DAA520",
// };
// console.log(colors["Goldern Rod"]);

// // Task2;
// const car = {
//   name: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// car.passengerCapacity = 5;
// console.log(car);

// // Task3;
// const student1 = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };
// const mark = student1.physics.marks;
// console.log(mark);
// console.log(student1.physics.marks);

// // Task4;
// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };

// let propCount = Object.keys(student).length;
// console.log(propCount);

// Task5;
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const key in myObject) {
  console.log("key: ", key + " | " + "type: ", typeof myObject[key]);
}
