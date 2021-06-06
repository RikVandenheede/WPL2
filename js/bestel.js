"use strict";
//html elementen
let dotrood = document.getElementById("dotrood");
let dotgeel = document.getElementById("dotgeel");
let dotblauw = document.getElementById("dotblauw");
let imgbandje = document.getElementById("imgbandje");
let inwinkelmandjebutton = document.getElementById("inwinkelmandje");
let afrekenenbutton = document.getElementById("afrekenenbutton");

//variable
let vasteprijs = '69.99';
let bandjes = [
    {kleur:'Rood', prijs: vasteprijs, aantal: 0, img:'./images/BandRoodPingGroen.png'},
    {kleur:'Geel', prijs: vasteprijs, aantal: 0, img:'./images/BandGeelPingGroen.png'},
    {kleur:'Blauw', prijs: vasteprijs, aantal: 0, img:'./images/BnadTurqPingGroen.png'}
];
let itemsinwinkelmandje = [];
let inputVanStorage;

//eventhandelers
dotrood.addEventListener("click", clickondotrood);
dotgeel.addEventListener("click", clickondotgeel);
dotblauw.addEventListener("click", clickondotblauw);
inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje);
afrekenenbutton.addEventListener("click", afrekenen);

//Op welke kleur je klikt
function clickondotrood(){
    dotrood.style.border = "solid 2px black";
    dotgeel.style.border = "none";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandRoodPingGroen.png";
    dotrood.value = 1;
    dotgeel.value = 0;
    dotblauw.value = 0;
}
function clickondotgeel(){
    dotrood.style.border = "none";
    dotgeel.style.border = "solid 2px black";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandGeelPingGroen.png";
    dotrood.value = 0;
    dotgeel.value = 1;
    dotblauw.value = 0;
}
function clickondotblauw(){
    dotrood.style.border = "none";
    dotgeel.style.border = "none";
    dotblauw.style.border = "solid 2px black"; 
    imgbandje.src = "./images/BnadTurqPingGroen.png";
    dotrood.value = 0;
    dotgeel.value = 0;
    dotblauw.value = 1;
}

//toevoegen aan de winkelmand
function toevoegenaanwinkelmandje(){

    if(dotgeel.value == 1)
        itemToevoegenAanSessionstorage(1, bandjes[1].kleur);
    
    else if (dotblauw.value == 1) 
        itemToevoegenAanSessionstorage(2, bandjes[2].kleur); 
    
    else 
        itemToevoegenAanSessionstorage(0, bandjes[0].kleur);
    
}

//Items laten zien in pop-up
function itemslatenzieninpopup(nr){
    //leegmaken van de div
    document.getElementById('popupcontentimg').innerHTML = "";
    document.getElementById('popupcontentkleur').innerHTML = "";
    document.getElementById('popupcontentprijs').innerHTML = "";
    
    //img per element
    let imgelement = document.createElement("img");
    imgelement.setAttribute('src', bandjes[nr].img);
    imgelement.setAttribute('height', '150px');
    document.getElementById('popupcontentimg').appendChild(imgelement);

    //welke kleur het bandje is
    let newP = document.createElement("p");
    newP.className = "popupcontentkleur-pingwing";
    let newPText = document.createTextNode(`PingWing`);
    newP.appendChild(newPText);
    document.getElementById("popupcontentkleur").appendChild(newP);

    newP = document.createElement("p");
    newP.id = "kleurvanbandje";
    newPText = document.createTextNode(`Kleur: ${bandjes[nr].kleur}`);
    newP.appendChild(newPText);
    document.getElementById("popupcontentkleur").appendChild(newP);
    
    //Prijs van bandje
    newP = document.createElement("p");
    newPText = document.createTextNode(`Prijs`);
    newP.appendChild(newPText);
    document.getElementById("popupcontentprijs").appendChild(newP);

    newP = document.createElement("p");
    newP.className = "popupcontentprijs-prijs"
    newPText = document.createTextNode(bandjes[nr].prijs);
    newP.appendChild(newPText);
    document.getElementById("popupcontentprijs").appendChild(newP);
}

function afrekenen(){
    window.location = "./winkelmandje.html";
}



function itemToevoegenAanSessionstorage(nr, kleur){
    if(sessionStorage.getItem("winkelwagen") == undefined){
        bandjes[nr].aantal++;
        sessionStorage.setItem('winkelwagen',JSON.stringify([bandjes[nr]]));
        itemslatenzieninpopup(nr);
    }
    else{
        inputVanStorage = JSON.parse(sessionStorage.getItem('winkelwagen'));
        const itemInStorageMetZelfdeKleur =  inputVanStorage.filter((x) =>  x.kleur == kleur ); 
        
        if(itemInStorageMetZelfdeKleur.length  == 1){
            itemInStorageMetZelfdeKleur[0].aantal++;
            itemInStorageMetZelfdeKleur[0].prijs = parseFloat(itemInStorageMetZelfdeKleur[0].prijs) + parseFloat(vasteprijs);
            sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            itemslatenzieninpopup(nr);
        }
        else{
            bandjes[nr].aantal++;
            inputVanStorage.push(bandjes[nr]);
            sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            itemslatenzieninpopup(nr);
        }            
    }
}


    






