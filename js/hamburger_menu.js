let burgerButton = document.querySelector(".hamburger"); // haalt de class op en zet die in een variable
let openMenu = false; // zet false in de variable
burgerButton.addEventListener("click", () => {
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