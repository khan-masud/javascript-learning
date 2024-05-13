var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

setInterval(function() {
    var date = new Date();
    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
}, 1000);

var date = new Date();
var showDate = document.getElementById('dateShow');

showDate.innerText = date.toLocaleDateString();