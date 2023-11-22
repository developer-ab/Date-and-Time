// javascript code for clock

// selecting the ids of the div in which the time and date to be displayed.
const clock = document.getElementById('clock')
const date = document.getElementById('date')

// using this method as it updates the value after the given time interval(in Miliseconds).
setInterval(function () {

    let date2 = new Date();
    date.innerHTML = date2.toLocaleDateString();

}, 1000);

setInterval(function () {

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);











