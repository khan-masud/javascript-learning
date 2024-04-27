// Lets work with the class

var heading = document.getElementsByClassName('heading'); // Select all class named 'heading'
console.log(heading); // Target all heading classes in console
console.log(heading[0]); // Target first element of 'heading' class 
console.log(heading[1]); // Target second element of 'heading' class

// Now we are going to work with id
// Working with an Id is the best practice for DOM

var p1 = document.getElementById('p1'); // Select 'p1' named Id
console.log(p1); 
var p2 = document.getElementById('p2'); // Select 'p2' named Id
console.log(p2);



// We can also use querySelector() 
var headings = document.querySelector('.heading'); // Note : This can only target the first element of the classes. In our  HTML file we have 3 heading class elements but querySelector() can only target the first element from start the page.
console.log(headings);

// We can also select all classes elements named 'heading' via querySelector. Lets do it.

var headingAll = document.querySelectorAll('.heading'); // Just use querySelectorAll() instead of querySelector(). 
console.log(headingAll);
console.log(headingAll[1]); // Now you can access all classes named 'heading' in HTML file by their index number.

// Lets target the Ids via querySelector()

var para1 = document.querySelector('#p1'); // Target p1 id
console.log(para1);
var para2 = document.querySelector('#p2'); // Target p2 id
console.log(para2);

/*
#######################################################

Note : All of codes above, there is no need to use console.log but we used it only for checking that our Javascript code is working or not in the browser's console / terminal.

#######################################################
*/


// Good job Masud. Now make some changes in the game. Lets change the css of classes and ids with javascript.
// We stored classes in variable before. So just call it and finish your task.


// Lets do some extra work for better understanding
//------------------------------
headingClass1 = heading[0];
headingClass2 = heading[1];
headingClass3 = heading[2];
//------------------------------

// Now will be easy to understanding what's going on.

headingClass1.innerText = 'This text is changed by Javascript. Before it was Abdullah Al Masud.'; // Changed the text for heading1
headingClass2.innerText = 'This text is changed by Javascript. Before it was Moriom Nesa Labonna.'; // Changed the text for heading2

