const scoreboard1 = document.getElementById("score");
const scoreboard2 = document.getElementById("score-two");
// Home button
const homeButton1 = document.getElementById("btn-one");
const homeButton2 = document.getElementById("btn-two");
const homeButton3 = document.getElementById("btn-three");

//Guest button
const guestButton1 = document.getElementById("guest-btn-one");
const guestButton2 = document.getElementById("guest-btn-two");
const guestButton3 = document.getElementById("guest-btn-three");

// Home score increment so create a new variable starting at 0
let homeScore1 = 0;
let homeScore2 = 0;
let homeScore3 = 0;

// Guest score increment also and starts at 0
let guestScore1 = 0;
let guestScore2 = 0;
let guestScore3 = 0;

// Have a function for home the increments by 1, 2, and 3
function homeIncrementOne() {
    homeScore1 += 1;
    scoreboard1.textContent = homeScore1;
    console.log(homeScore1);
}
homeIncrementOne();

function homeIncrementTwo() {
    homeScore2 += 2;
    scoreboard1.textContent = homeScore2;
}

// Click button in order to increment
homeButton1.addEventListener("click", homeIncrementOne);
homeButton2.addEventListener("click", homeIncrementTwo);