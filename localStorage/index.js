/*
    In this period we are going to learn using the local storage in browser.
      - localStorage.setItem()
      - localStorage.getItem()
*/

const array = [10, 20, 30, 40, 50];

const object = 
    {
    name: 'John',
    age: 25,
    occupation: 'Developer',
    };

localStorage.setItem('Name', 'Abdullah Al Masud'); // Saved this item in local storage. To check inspect on browser.
localStorage.setItem('Nickname', 'The Offline Dreamer'); 

localStorage.setItem('Array', array); // We can also store arrays

localStorage.setItem('Object', object); // We can also store objects but there is a little problem. We have to store an object in JSON to ignore this problem.
const jsonObject = JSON.stringify(object);
localStorage.setItem('JSON Object', jsonObject); // Now we can store objects in local storage without any problem.


// We can use directly the local storage data of any string, array.

localStorage.getItem('Name'); // Received value of 'Name' key from local storage.

// To use this later, it is safe for store it in a new variable.
const receivedName = localStorage.getItem('Name');
console.log(receivedName);

console.log(localStorage.getItem('Nickname')); // Or use it directly
console.log(localStorage.getItem('Array')); // Received the values of array

// For receive the object values we need to convert the JSON object into a real object. Then we can use it's values and keys.
const receivedObject = JSON.parse(localStorage.getItem('JSON Object'));
console.log(JSON.parse(localStorage.getItem('JSON Object'))); // Make it in single line
console.log(receivedObject);