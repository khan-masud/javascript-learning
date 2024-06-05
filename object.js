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
    heartName : 'Not available yet.',
    ourDreams : ['Bari', 'Gari', 'Baby', 'Misti Songsar'], // Store an array
}


//Lets build a nested object structure
var academicResult = [ // Created an array
    subject = { // Stored an object in the array as an element of array.
        SPL : [10, 20, 30, 40, 50], // In the object, stored an another array.
        Physics : [10, 20, 30, 40, 50], 
        Math : [10, 30, 40, 50, 70],
        Economics : [10, 30, 60, 48, 34],
        English : [29, 83, 22, 33, 58],
        Special : [ // Lets create another object into the same array
            specialObject = { // Object 1
                        name : "Abdullah Al Masud",
                        roll : 10,
                        batch : "Day-93",
            },
            specialObject2 = { // Object 2
                        name : "Name Hidden By Masud",
                        roll : 69,
                        batch : "Day-93",
            }
        ]
    },
    cgpa = { // Second element of the array "academicResult"
        firstSemester : 3.99, // Stored float value
        secondSemester : 3.90,
        thirdSemester : 3.94,
    }
]

console.log(myInfo); // Access and print of data of the object
console.log("My name is : " + myInfo.name); // Access and print specific data of an object
console.log("My queen's name is : " + myInfo.heartName); 
console.log("Our dreams : " + myInfo.ourDreams); // Access and print the data of array
console.log("We both want a " + myInfo.ourDreams[3]); // Access and print specific element of array into an objects

// We can also store data in another variable.

var love = myInfo.name + " + " + myInfo.heartName; // Store data in another variable

console.log(love); // Print the love variable

// Now we are going to access the nested object structure

console.log(academicResult); // Access whole academicResult array
console.log(academicResult[0]); // Access the 1st object of array
console.log(academicResult[1]); // Access the 2nd object of array
console.log(academicResult[0].SPL); // Access the 1st object's 'SPL' named array of academicResult array
console.log(academicResult[0].Physics); // Access the 1st object's 'Physics' named array of academicResult array
console.log(academicResult[0].SPL[0]); // Access SPL array's first value
console.log(academicResult[0].Physics[1]); // Access Physics array's second value
console.log(academicResult[1].firstSemester); // Access second object's firstSemester value of academicResult array
console.log(academicResult[1].secondSemester); // Access second object's secondSemester value of academicResult array
console.log(academicResult[0].Special); // Access Special array
console.log(academicResult[0].Special[0]); // Access Special array's first object
console.log(academicResult[0].Special[1]); // Access Special array's second object
console.log(academicResult[0].Special[0].name); // Access Special array's first object's name value
console.log(academicResult[0].Special[1].name); // Access Special array's second object's name value
console.log(academicResult[0].Special[0].roll); // Access Special array's first object's roll value
console.log(academicResult[0].Special[1].roll); // Access Special array's second object's roll value

/*
##########################################

 Coded by.
 - Abdullah Al Masud
 - BSc In CSE, Dhaka International University

###########################################
*/