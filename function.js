function add() { // Declaring function add()
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;

    console.log(sum); // Print sum
}

add(); // Call function

// Function with passing value from outside of the function
sub(20,10); // Calling and passing 20 and 10 in sub() function

function sub(n1, n2) { // Declaring and receiving 20 and 10 in n1 and n2 into sub() function
    var sub = n1 - n2;
    console.log(sub);
}

// Passing value with variable

var num1 = 100;
var num2 = 200;
mul(num1, num2); // Passing num1 and num2 in mul() function

function mul(num1, num2) { // Receive values
    var multiplication = console.log(num1 * num2); // Store output value in multiplication variable.
}

// Function with return value

var num3 = 20;
var num4 = 4;
var returnedValue = divide(num3,num4); // Store return value in another variable named returnedValue
console.log(returnedValue); // Print returned value

function divide(num3, num4) {
    var div = num3 / num4; // Store result in div variable
    return div; // Return div
}

// Passing an array in function

var numbers = [10, 20, 30, 40, 50, 60, 70];

passingArray(numbers); // Passing numbers array

function passingArray(numbers) { // Receiving numbers array
    console.log(numbers); // Print numbers array

    // Lets do some new
    // we are going to apply addition for each elements of numbers array
    var addition = 0; // Declaring a new variable and store value 0 by default for ignoring garbage value
    for (var i = 0; i < numbers.length; i++) {
        addition += numbers[i]; // addition = addition + numbers[i];
    }
    console.log('The Addition Result is : ' + addition); // Print addition result.
}