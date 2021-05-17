"use strict";

let bovenlqqg = document.getElementById("bovenlqqg");
let mountain = document.getElementById("mountain");
let beach = document.getElementById("beach");
let land = document.getElementById("land");

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
        bovenlqqg.style.top =  (scroll * 0.3) + 2260 + "px";
        mountain.style.top = (scroll * 0.25) + 2490 + "px";
        beach.style.top =  (scroll * 0.15) + 3200 + "px";
    console.log(scroll);
});