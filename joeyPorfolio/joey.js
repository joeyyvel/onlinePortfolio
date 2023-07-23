'use strict';
// navigation bar hidden and show upon scrollingY
const myNav = document.querySelector('.nav');

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY){
        myNav.classList.add("nav--hidden");
    } else {
        myNav.classList.remove('nav--hidden');
    }

     lastScrollY = window.scrollY;
});

// arrow animation


// slide show functions
var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}    

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    
    if (n > x.length) {
         slideIndex = 1
    }

    if (n < 1) {
         slideIndex = x.length
    }

    for( i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){ 
        dots[i].className = dots[i].className.replace("style: color:red", " ")
}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "red";

}