// We are going to learn another interesting topic of programming language and that is Random Number Generation.
// Random Number Generation is a process of generating a random number within a specified range.
// We can use the Math.random() function in JavaScript to generate a random number.
// The Math.random() function returns a random number between 0 (inclusive) and 1.
// We can use the Math.floor() function to round down the number to the nearest integer.
// We can use the Math.ceil() function to round up the number to the nearest integer.
// We can use the Math.round() function to round the number to the nearest integer.
// Okay then lets see the magic.


console.log(Math.random()); // It will generate a random number between 0 and 1 in every time. It will be a floating number of 16 numbers after the decimal point.
console.log(Math.random() * 10); // It will generate a random number between 0 and 9 in every time. It will be a floating number of 16 numbers after the decimal point.
console.log(Math.random() * 100); // It will generate a random number between 0 and 99 in every time. It will be a floating number of 16 numbers after the decimal point.
console.log(Math.floor(Math.random() * 10)); // It will generate a random number between 0 to 9 and it will be a pure integer number.
console.log(Math.ceil(Math.random() * 10)); // It will generate a random number between 1 to 10 and it will be a pure integer number.
console.log(Math.round(Math.random() * 10)); // It will generate a random number between 0 to 10 and it will be a pure integer number.


// For better understanding

const Random = Math.random() * 10;
console.log("Random Number : " + Random);
let Floor = Math.floor(Random); 
console.log("Floor of Random Number : " + Floor);
let Ceil = Math.ceil(Random);
console.log("Ceil of Random Number : " + Ceil);
let Round = Math.round(Random);
console.log("Round of Random Number : " + Round);


/*
 - Tips
 Always try to use round and Ceil for best practice.
*/