const college = {
  name: "ANC",
  class: ["11", "12"],
  events: ["Science fair", "21 feb"],
  special: {
    color: "red",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

college.special.result.gpa = 4.5;
const news = (college.special.result.gpa = 4.5);
console.log(news);
delete college.class;
console.log(college);
