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

function homeIncrementThree() {
    homeScore3 += 3;
    scoreboard1.textContent = homeScore3;
}

// Function for guest increment
function guestIncrementOne() {
    guestScore1 += 1;
    scoreboard2.textContent = guestScore1;
}

function guestIncrementTwo() {
    guestScore2 += 2;
    scoreboard2.textContent = guestScore2;
}

function guestIncrementThree() {
    guestScore3 += 3;
    scoreboard2.textContent = guestScore3;
}

// Click button in order to increment for home
homeButton1.addEventListener("click", homeIncrementOne);
homeButton2.addEventListener("click", homeIncrementTwo);
homeButton3.addEventListener("click", homeIncrementThree);
// Click button in order to increment for guest
guestButton1.addEventListener("click", guestIncrementOne);
guestButton2.addEventListener("click", guestIncrementTwo);
guestButton3.addEventListener("click", guestIncrementThree);
