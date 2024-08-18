var bitByters = ['Masud', 'Zihak', 'Mashrafi', 'Labonna', 'Sadiya', 'Rakib', 'Alif']; // Declaring Array

console.log(bitByters);// Print all elements of array
console.log(bitByters[0]); // Print element by index number
console.log(bitByters.length) // Print the length of array
console.log(bitByters[bitByters.length - 1]); // Print the last element of array

// Let's try in another way...

console.log("Team Members Of BitByters : " + bitByters);
console.log("Team Leader : " + bitByters[1]);
console.log("Total Number Of Team Member : " + bitByters.length);
bitByters[1] = 'Foysal'; // Replacing elements by it's index number
console.log("After replacing Zihak to Foysal : " + bitByters);

/* -------- Swap Position Of Two Elements -------- */
var temp = bitByters[0]; // Declare a new variable named temp and assigned temp = Masud
bitByters[0] = bitByters[2]; // Masud = Mashrafi
bitByters[2] = temp; // Mashrafi = Masud;

console.log("After Swapping : " + bitByters);

/* ------ Swap first and last element of array ------- */
var temp2 = bitByters[0];
bitByters[0] = bitByters[bitByters.length - 1];
bitByters[bitByters.length - 1] = temp2;

console.log("After Swapping First and Last Element : " + bitByters);

// Lets try something crazy

var array1 = [10, 20, 30, 40];
console.log(...array1); // It will show the all elements or array1

var array2 = [...array1, 50, 60, 70, 80, 90]; // It will be added the elements of array1 to array2.
console.log(array2);