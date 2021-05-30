"use strict";

let animationKai = document.querySelectorAll(".color-odd")[0];
let animationDries = document.querySelectorAll(".color-odd")[1];
let animationRik = document.querySelectorAll(".color-even")[0];
let animationThymen = document.querySelectorAll(".color-even")[1];
let animationArisha = document.querySelectorAll(".color-even")[2];


window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > 100){
        animationRik.classList.add("color-even-ani");
    }if(scroll > 500){
        animationKai.classList.add("color-odd-ani");
    }if(scroll > 900){
        animationThymen.classList.add("color-even-ani");
    }if(scroll > 1300){
        animationDries.classList.add("color-odd-ani");
    }if(scroll > 1700){
        animationArisha.classList.add("color-even-ani");
    }
    console.log(scroll);
});