function alertMessage() {
    alert("ar jibone kono meyer post a react dibo na.."); // Sotti e dibo na vai.. Hasis na baaaaal
}

function changeColor() {
    var h2 = document.getElementById('h2'); //Target h2 by id name
    h2.style.color = 'red'; // Style text with javascript
}

function changeBG () {
    var h2 = document.getElementById('h2');
    h2.style.backgroundColor = 'green';
    h2.style.color = 'black';
}


// We can apply javascript without changing our html file. Just call the targeted id and use addEventListener
// Syntax : var.EventListener('event_name', function_name or build here a function);

var submitbtn = document.getElementById('submitbtn'); // Target inputbox and store it in 'submitbtn' variable.
submitbtn.addEventListener('click', function() { // Built a function instead of call function.
    var input = document.getElementById('input');
    var inputtext = document.getElementById('inputtext');
    inputtext.innerText = input.value; // Change the text
});

var pbtn = document.getElementById('pbtn');
pbtn.addEventListener('click', showParagraph); // Called function instead of create function inside.

function showParagraph() {
    var phiddentext = document.getElementById('phiddentext');
    phiddentext.style.display = ''; // Reset the display attribute value
}

var divhover = document.getElementById('divhover');
divhover.addEventListener('mouseover', hoverEffect); // mouseover event

function hoverEffect() {
    var phover = document.getElementById('phover');
    var divhover = document.getElementById('divhover');

    divhover.style.padding = '10px';
    divhover.style.width = '70%';
    divhover.style.backgroundColor = 'green';
    divhover.style.color = '#fff';
    divhover.style.textAlign = 'center';
    phover.style.fontSize = '20px';
}