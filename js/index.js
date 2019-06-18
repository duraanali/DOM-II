// // Your code goes here

//---------1. Mouse over the logo -------------
let logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function (event) { 
    event.stopPropagation();
    event.preventDefault();
    event.target.style.color = "blue"; 

    setTimeout(function () {
    event.target.style.color = "";
}, 500);
}, false);

//-----------2. Hit Enter to make main image disappear --------

document.addEventListener('keydown', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.code == 'Enter') {
        document.querySelector(".intro").style.display = "none";
    }
});

//----------------3. Zoom in Zoom Out middle right image--------------

function zoom(event) {
    event.stopPropagation();
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    firstImg.style.transform = `scale(${scale})`;
}

let scale = 1;
const firstImg = document.querySelector('.img-content');
firstImg.onwheel = zoom;

//----------------4. Alert message for onload --------------

window.addEventListener('load', (event) => {
    event.stopPropagation();
    event.preventDefault();
    alert('The Website just started to load!');
    
});

//-------------- 5. Double Click----------


const doubleClick = document.querySelector('body')

doubleClick.addEventListener("dblclick", function (eventObject) {
    event.stopPropagation();
    event.preventDefault();
    alert(`Hey, You just Double clicked!`);
});

//-------------- 6. Click----------
const buttonClick = document.querySelector('.btn');

buttonClick.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    buttonClick.innerHTML = `Click More ${event.detail}`;
});

//----------- 7. MouseOver
const pageImages = document.querySelectorAll('img');

pageImages.forEach(image => image.addEventListener('mouseover', event => {
    event.target.style.border = '10px solid black';
}));

//------------8. Before Print

window.addEventListener("beforeprint", myFunction);

function myFunction() {
    event.stopPropagation();
    event.preventDefault();
    alert("Hey, You cant print this page, JK!");
}

//-------------9. Before Leaving

window.addEventListener("beforeunload", function (event) {
    event.stopPropagation();
    event.preventDefault();
    event.returnValue = "Write something clever here..";
});

//---------------10.

document.querySelector("nav").addEventListener("contextmenu", myFunction);

function myFunction() {
    event.stopPropagation();
    event.preventDefault();
    var x = document.querySelector("nav");
    x.innerHTML = "OOPS, You just right clicked!";
    x.style.fontSize = "30px";
}


document.querySelector("nav a").addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault()
});
