// Task1
const sentence =
  "This is me and I am a very hard working person also do exam very good";

// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === "a") {
//     count++;
//   }
//   //   console.log(sentence[i]);
// }
// console.log(count);

// Task3

// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === "a" && "e" && "i" && "o" && "u") {
//     console.log("Yes have vowels");
//   }

//   //   console.log(sentence[i]);
// }

// console.log("Done");

// Task4
// if (sentence.toLowerCase().includes("x" || "X")) {
//   let replace = sentence.replace("x", "y");
//   console.log(replace);
// }

// Task5

let byWords = sentence.split(" ");
// console.log(byWords);
for (let i = 0; i < byWords.length; i++) {
  //   console.log(byWords[i]);
  byWords[i] = byWords[i].charAt(0).toUpperCase() + byWords[i].slice(1);
}
console.log(byWords.join(" "));

// for (const word of sentence) {
//   console.log(word);
// }
