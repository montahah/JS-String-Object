const sentence = "I am Learning web dev";

let reverse = "";
for (const letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
  //   console.log(reverse);
}
console.log(reverse);
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  //   console.log(i);
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

const reverse1 = sentence.split("").reverse().join("");
console.log(reverse1);
