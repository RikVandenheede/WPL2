"use strict";

let bovenlqqg = document.getElementById("bovenlqqg");
let mountain = document.getElementById("mountain");
let water = document.getElementById("water");
let beach = document.getElementById("beach");
let land = document.getElementById("land");

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;

    if(scroll > 320){
        let container = document.getElementById("imagesanimation");
        container.querySelector(".een").classList.add("eenna");
        container.querySelector(".twee").classList.add("tweena");
        container.querySelector(".drie").classList.add("driena");
        container.querySelector(".vier").classList.add("vierna");
    }
    /*
    if(scroll > 2400){
        bovenlqqg.style.top = (scroll / 100) * 5 + "px";
        mountain.style.top = (scroll / 100) * 2  + "px";
        water.style.top = (scroll / 100) * 2  + "px";
        beach.style.top = (scroll / 100) * 2 + "px";
    }
    */
    console.log(scroll);
});

let tijdstip = new Date().getHours();
let ingelodeUser = sessionStorage.getItem("showName");

if(sessionStorage.getItem("alert")){
    if (tijdstip >= 18) {
        alert("Goedeavond, " + (sessionStorage.getItem("showName")));
    }
    else if (tijdstip >= 12 && tijdstip < 18) {
        alert("Goedemiddag, " + (sessionStorage.getItem("showName")));
    }
    else {
        alert("Goedemorgen, " + (sessionStorage.getItem("showName")));
    }
    sessionStorage.removeItem("alert");
}
