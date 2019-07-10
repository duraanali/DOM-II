//-------------Blue
function moveBlue() {
  const mainDiv = document.querySelector(".blocks");
  mainDiv.prepend(document.querySelector(".block--blue"));
  mainDiv.prepend(document.querySelector(".block--blue"));
}

let blue = document.querySelector(".block--blue");
blue.addEventListener("click", moveBlue);

function moveRightBlue(event) {
  TweenMax.to(".block--blue", 2, { x: 2000, delay: 2 });

  event.stopPropagation();
}

blue.addEventListener("click", moveRightBlue);

//----------------Red
function moveRed() {
  const mainDiv2 = document.querySelector(".blocks");
  mainDiv2.prepend(document.querySelector(".block--red"));
  mainDiv2.prepend(document.querySelector(".block--red"));
}
let red = document.querySelector(".block--red");
red.addEventListener("click", moveRed);

function moveRightRed(event) {
  TweenMax.to(".block--red", 2, { x: 2000, delay: 2 });

  event.stopPropagation();
}

red.addEventListener("click", moveRightRed);

//----------------Green
function moveGreen() {
  const mainDiv3 = document.querySelector(".blocks");
  mainDiv3.prepend(document.querySelector(".block--green"));
  mainDiv3.prepend(document.querySelector(".block--green"));
}
let green = document.querySelector(".block--green");
green.addEventListener("click", moveGreen);

function moveRightGreen(event) {
  TweenMax.to(".block--green", 2, { x: 2000, delay: 2 });

  event.stopPropagation();
}

green.addEventListener("click", moveRightGreen);

//--------------Pink

//-------Animate
let pink = document.querySelector(".block--pink");

function moveRightPink(event) {
  TweenMax.to(".block--pink", 2, { x: 2000, delay: 2 });

  event.stopPropagation();
}

pink.addEventListener("click", moveRightPink);

//-----------move up-------
function movePink(event) {
  const mainDiv4 = document.querySelector(".blocks");
  mainDiv4.prepend(document.querySelector(".block--pink"));
  mainDiv4.prepend(document.querySelector(".block--pink"));
  event.stopPropagation();

  return false;
}

pink.addEventListener("click", movePink);

//---------------Gray

function moveGray() {
  const mainDiv5 = document.querySelector(".blocks");
  mainDiv5.prepend(document.querySelector(".block--gray"));
  mainDiv5.prepend(document.querySelector(".block--gray"));
}
let gray = document.querySelector(".block--gray");
gray.addEventListener("click", moveGray);

function moveRightGray(event) {
  TweenMax.to(".block--gray", 2, { x: 2000, delay: 2 });

  event.stopPropagation();
}

gray.addEventListener("click", moveRightGray);
