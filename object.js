// 'Object' is a advanced version of 'Structure' of C programming language. 
// Lets play with object in Javascript.

 var a = 'Masud';
 var myInfo = { // Declared an object named myInfo
    name : 'Abdullah Al Masud', // Store string 
    nickName : 'Masud',
    motherName : 'Morjina Begum',
    fatherName : 'Wahedul Islam',
    DOB : '10/07/2004',
    age : 21, // Store integer
    heartName : 'Moriom Nesa Labonna',
    ourDreams : ['Bari', 'Gari', 'Baby', 'Misti Songsar'], // Store an array
}

console.log(myInfo); // Access and print of data of the object
console.log("My name is : " + myInfo.name); // Access and print specific data of an object
console.log("My queen's name is : " + myInfo.heartName); 
console.log("Our dreams : " + myInfo.ourDreams); // Access and print the data of array
console.log("We both want a " + myInfo.ourDreams[3]); // Access and print specific element of array into an objects
console.log(MyInfo.jhogra);

// We can also store data in another variable.

var love = myInfo.name + " + " + myInfo.heartName; // Store data in another variable

console.log(love); // Print the love variable
