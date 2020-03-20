// console.log(Math.max(2, 7, 32));

/** Triangle */
// muself
sign = "";
for (let i = 1; i <= 7; i++) {
  sign += "#";
  console.log(sign);
}

// Book
for (var line = "#"; line.length < 8; line += "#") console.log(line);

//-----------------------------------------------------------------------

/** FIZZBUZZ */
// myself
for (let numbers = 1; numbers <= 100; numbers++) {
  if (numbers % 3 === 0 && numbers % 5 !== 0) console.log("Fizz");
  else if (numbers % 5 == 0 && numbers % 3 !== 0) console.log("Buzz");
  else if (numbers % 5 == 0 && numbers % 3 === 0) console.log("FizzBuzz");
  else console.log(numbers);
}

// Book
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
console.log("------------------------------------------");

// mosh hamedani
const outputMosh = fizzBuzz(15);
console.log(outputMosh);

function fizzBuzz(number1) {
  if (number1 % 3 === 0 && number1 % 5 === 0) return "FizzBuzz";
  if (number1 % 3 === 0) return "Fizz";
  if (number1 % 5 === 0) return "Buzz";

  return number1;
}
console.log("------------------------------------------");
//-----------------------------------------------------------------------

/** Chessboard */
// myself
let hashTag;
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i % 2 === 0) hashTag = " " + "#";
    else hashTag = "#" + " ";
    console.log(hashTag);
  }
  console.log("\n");
}
console.log("------------------------------------------");

// Book
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) board += " ";
    else board += "#";
  }
  board += "\n";
}

console.log(board);
