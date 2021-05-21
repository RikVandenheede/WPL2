"use strict";

let bovenlqqg = document.getElementById("bovenlqqg");
let mountain = document.getElementById("mountain");
let water = document.getElementById("water");
let beach = document.getElementById("beach");
let land = document.getElementById("land");


window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > 2400){
        bovenlqqg.style.top = (scroll / 100) * 5 + "px";
        mountain.style.top = (scroll / 100) * 2  + "px";
        water.style.top = (scroll / 100) * 2  + "px";
        beach.style.top = (scroll / 100) * 2 + "px";
    }
    console.log(scroll);
});

if(sessionStorage.getItem("alert")){
    alert("Welkom, " + (sessionStorage.getItem("showName")));
    sessionStorage.removeItem("alert");
}