/*
   In this, we are going to learn the "for of" and "for in" loop in javascript.
   At first we need to declare and initialize an array and an object.
*/

const numbers = [10,20,30,40,50,60,70,80,90];
const person = {
    name : "John",
    age : 25,
    city : "New York"
};

// We can traverse the array in two methods.

// Method 1 - Using for loop

for (let i=0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}

// Method 2 - Using for and of

for (let number of numbers)
{
    console.log(number);
}

// Method 3 - Shortcut method

console.log(...numbers);


// To access the object we can use normal method of object.

console.log(person); // Access full object with keys and values
console.log(person.name); // Access only name property of object
console.log(person["name"]); // Access only name property of object using bracket notation

// Now we will access the object using for in

for (let data in person) {
    console.log(data); // Access the keys of object 'person'
    console.log(person[data]); // Access the values of object 'person'

}


/*
  Summary
  --------
     - To traverse the array we can use for of
     - To access the values of object we can use for in
*/

