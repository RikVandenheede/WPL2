"use strict";

// Hamburger menu
let burgerButton = document.querySelector(".hamburger"); // haalt de class op en zet die in een variable
let openMenu = false; // zet false in de variable

burgerButton.addEventListener("click", () =>{
    if(!openMenu){ // als openMenu "false" is
        burgerButton.classList.add("open"); // voeg je open toe aan de class 
        openMenu = true; // na het toevoegen van de class zet die de boolean terug op false( waardoor die als je de volge,de keer op het menu klikt, die naar de else gaat omdat openmenu niet false is)
        let buttons = document.querySelector(".navbar-toggler");
        buttons.cssText = "display: none;"
    }else{
        burgerButton.classList.remove("open"); // verwijderd open van de class
        openMenu = false; // zet vervolgens de boolean terug op false waardoor die als je er nog eens op klikt terug in de if statment gaat
    }
});

// Naam laten zien
((laatNaamZien, groet) =>{
    if(groet){
        let welcomeName = laatNaamZien.charAt(0).toUpperCase() + laatNaamZien.substring(1);
        return document.getElementById("naam").innerHTML = welcomeName;
    }
})(sessionStorage.getItem("showName"), (sessionStorage.getItem("groet")));

// Winkelmandje
setInterval(() => {
    let items = JSON.parse(sessionStorage.getItem("winkelwagen"));
    let winkelmandjeAantal = document.querySelector(".winkelmandje-aantal");
    let aantalItems = 0;
    if(items !== null){
        winkelmandjeAantal.style.cssText = "visibility: visible;";
        for(let i = 0; i < items.length; i++){
            aantalItems += items[i].aantal;
        }
        winkelmandjeAantal.style.cssText = "visibility: visible;";
        document.querySelector(".winkelmandje-aantal > span").innerHTML = aantalItems;
    }
    if(sessionStorage.getItem("winkelwagen") == undefined){
        winkelmandjeAantal.style.cssText = "visibility: hidden;";
    }
},200);