var num1 = 10; // number
var num2 = '10'; // string
var num3 = 30; // number
var num4 = '30'; // string
var num5 = 50; // number

console.log(`Given values are : ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);
num1 = num5; // Assign value of num5 to num1. 
console.log(`Values after assigning value of num5 to num1 : ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);
num1 = 10; // Reset values for next operations.

num1 == num2; // It works only when checks conditions.
if (num1==num2) { // Check values of num1 and num2 are equal or not. 
    console.log(`Num1 : ${num1} and Num2 : ${num2} are equal.`);
}
else {
    console.log("Numbers are not equal.");
}

num3 === num4; // It works only when checks conditions. 
if (num1===num2) { // Check values of num1 and num2 are equal or not. It will also check the data types of values. 
    console.log(`Num3 : ${num3} and Num4 : ${num4} are equal. Because num3 is number and num4 is string. `);
}
else {
    console.log("Numbers are not equal. Because num3 is number and num4 is string.");
}

// Difference between == and ===

/*
== --> It checks only values when comparing. Data type doesn't effect on result. This is why 10 and '10' is equal though 10 is number and '10' is string.
=== --> It checks the values and data types when comparing. This is why 30 and '30' is not equal because 30 is a number and '30' is string. '===' uses when need to check deeply. 
*/



// Difference between != and !== 

/* 
!= --> It checks only when values aren't equal. Data type doesn't effect on results.
!== --> It checks the values and data type aren't equal. If one of these goes false then statement of "!==" goes true and execute.
*/

if (num1 != num3) {
    console.log('num1 and num3 is not equal. Because values of num1 and num3 is not equal.');
}
if (num2 !== num4) {
    console.log('num2 and num4 is not equal. Because data types are same but values of num2 and num4 is not equal.');
}