const person = {
  name: "Sadar Uddin",
  age: 50,
  designation: "dev",
  salary: 20000,
};

person.salary = 50000;
person["age"] = 60;
console.log(person);
