//-------------Blue
function moveBlue() {
  const mainDiv = document.querySelector(".blocks");
  mainDiv.prepend(document.querySelector(".block--blue"));
  mainDiv.prepend(document.querySelector(".block--blue"));
}

let blue = document.querySelector(".block--blue");
blue.addEventListener("click", moveBlue);

//----------------Red
function moveRed() {
  const mainDiv2 = document.querySelector(".blocks");
  mainDiv2.prepend(document.querySelector(".block--red"));
  mainDiv2.prepend(document.querySelector(".block--red"));
}
let red = document.querySelector(".block--red");
red.addEventListener("click", moveRed);

//----------------Green
function moveGreen() {
  const mainDiv3 = document.querySelector(".blocks");
  mainDiv3.prepend(document.querySelector(".block--green"));
  mainDiv3.prepend(document.querySelector(".block--green"));
}
let green = document.querySelector(".block--green");
green.addEventListener("click", moveGreen);

//--------------Pink

function movePink() {
  const mainDiv4 = document.querySelector(".blocks");
  mainDiv4.prepend(document.querySelector(".block--pink"));
  mainDiv4.prepend(document.querySelector(".block--pink"));
}
let pink = document.querySelector(".block--pink");
pink.addEventListener("click", movePink);

function mouseDown() {
  console.log("Im moving guys");
}

pink.addEventListener("mousedown", mouseDown);

//---------------Grey

function moveGray() {
  const mainDiv5 = document.querySelector(".blocks");
  mainDiv5.prepend(document.querySelector(".block--gray"));
  mainDiv5.prepend(document.querySelector(".block--gray"));
}
let gray = document.querySelector(".block--gray");
gray.addEventListener("click", moveGray);
