// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
buildModDate();
// variables for wind chill function
let temp = 25;
let speed = 10;
buildWC(speed, temp);
let weather = "clear";
// The time indictor function
let hour="5";
timeBall(hour);

// Changes the backgorund image
changeSummaryImage(weather);
})



console.log('My javascript is being read.');


// Handles small screen menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}


// Build the last modified date

function buildModDate(){
var fullDay = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


var m = month[fullDay.getMonth()];
var n = weekday[fullDay.getDay()];
console.log(`The name of the day is: ${n}`);

document.getElementById("todaysDate").innerHTML = n + ", " + fullDay.getDate() + " " + m + " " + fullDay.getFullYear();
}


//wind chill

function buildWC(speed, temp){
    let feelTemp = document.getElementById('feels');
    let highTemp = document.getElementById('high');
    let lowTemp = document.getElementById('low');
    let currentTemp = document.getElementById('current');
    let windSpeed = document.getElementById('wind');
    let windGusts = document.getElementById('gusts');
    // Compute the windchill
 let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);
 // Round the answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;

// Display the windchill
console.log(wc);

wc = 'Fells like ' + wc + '&#176;' + 'F';
let high = temp + 15;
let low = temp - 12;
feelTemp.innerHTML = wc;
highTemp.innerHTML = high + '&#176;';
lowTemp.innerHTML = low + '&#176;';
currentTemp.innerHTML = temp + '&#176;' + 'F';
windSpeed.innerHTML = speed + 'mph';
windGusts.innerHTML = 'Gusts: ' + (speed + 5) + 'mph';

}


function timeBall(hour){
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x){
        console.log(item);
        item.classList.remove("ball");
    }

    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }


function changeSummaryImage(weather){



}



}
