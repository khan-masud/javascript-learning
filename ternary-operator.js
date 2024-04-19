// Ternary operator is one kind of short form of if else statement control.
// For example we are going to understand this with a real life example.

var registeredPassword = 'masud@62783';
var loginPassword = 'masud@62783';

if (registeredPassword === loginPassword) {
    console.log('Your password is correct.');
}
else {
    console.log('Sorry! Your password is wrong.');
}

// We can do this whole code in a single line using ternary operator.
registeredPassword === loginPassword ? console.log('Your password is correct.') : console.log('Sorry! Your password is wrong.');

// We can also store the result in a variable.
var result = registeredPassword === loginPassword ? 'Your password is correct.' : 'Sorry! Your password is wrong.';
console.log(result);