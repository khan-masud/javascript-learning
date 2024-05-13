var monitor = document.getElementById('input');
var buttons = document.querySelectorAll('.btns button');

for (var i=0; i<buttons.length; i++) 
{
    var button = buttons[i];

    button.addEventListener('click', function(e) {
    var buttonValue = e.target.innerText;
       if (buttonValue === '=') {
          input.value = '= ' + eval(input.value);
       }
       else if (buttonValue === 'AC') {
           input.value = '';
       }
       else {
            input.value += buttonValue;
       }
    })
}