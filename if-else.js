// Maximum and Minimum Number

var num1 = 10;
var num2 = 20;
console.log(`Given numbers are ${num1} and ${num2}.`)

if (num1 > num2) {
    console.log(`Maximum Number : ${num1}`);
    console.log(`Minimum Number : ${num2}`);
}
else if (num2 > num1) {
    console.log(`Maximum Number : ${num2}`);
    console.log(`Minimum Number : ${num1}`);
}
else {
    console.log('Something is wrong. Please try again.');
}
