// Your code goes here

//---------Mouse over the logo -------------
let logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function (event) { 
    event.stopPropagation();
    event.target.style.color = "blue"; 

    setTimeout(function () {
    event.target.style.color = "";
}, 500);
}, false);

//----------- Hit Enter to make main image disappear --------

document.addEventListener('keydown', function (event) {
    event.stopPropagation();
    if (event.code == 'Enter') {
        document.querySelector(".intro").style.display = "none";
    }
});

//----------------Zoom in Zoom Out middle right image--------------

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

//----------------

window.addEventListener('load', (event) => {
    event.stopPropagation();
    alert('The Website just started to load!');
    
});