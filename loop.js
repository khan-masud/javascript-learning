// good to know
var num = 100;
console.log(num); // It will print 100
console.log(num++); // It will print 100 and increase the value of num 1 for later use. Increased result will show in next print. From now, num is equal 101.
console.log(num); // It will print 101 because num++ is declared before this line.
console.log(num--); // It will print 101 and decrease the value of num 1 for later use. Decreased result will show in next print. From now, num = 100.
console.log(num); // It will print 100 because num-- is declared before this line.
console.log(--num); // It will print 99 because the num was equal to 100 before this line.
console.log(++num); // It will print 100 because the num was equal to 99 before this line.


// for loop
var names = ['Masud', 'Chanchol', 'Samiul' , 'Mukul', 'Sayem', 'Naim'];

for (var i = 0; i < names.length; i++) {
    console.log(i,'.', names[i]); // Print all elements of names array.
}

// while loop
var i = 0; // I should declare outside and before of while loop.
while (i < names.length) {
    console.log(i + '. ' + names[i]);
    i++; // Increament or decreament operator must be placed in end of statements of while loop.
}