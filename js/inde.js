const score = document.getElementById("score");
const scoreTwo = document.getElementById("score-two");
const buttonOne = document.querySelector(".btn-one");
const buttonTwo = document.querySelector(".btn-two");
const buttonThree = document.querySelector(".btn-three");



function addOne  () {
    let button1 = 0;
    button1 += 1;
    score.textContent = button1;
    console.log(button1);
}

addOne();

function addTwo () {
    let button2 = 0;
    button2 += 2;
    score.textContent = button2;
}
addTwo();

function addThree ()  {
    let button3 = 0;
    button3 += 3;
    score.textContent = button3;
}

addThree();

buttonOne.addEventListener("click", addOne);
buttonTwo.addEventListener("click", addTwo);
buttonThree.addEventListener("click", addThree);