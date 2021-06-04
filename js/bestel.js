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

    if(dotgeel.value == 1){
        if(bandjes[1].aantal == 0){
            //itemsinwinkelmandje.push(bandjes[1])
            //bandjes[1].aantal++;
            //itemslatenzieninpopup(1);
            itemToevoegenAanSessionstorage(1, bandjes[1].kleur);
        }
        else{
            //bandjes[1].aantal++;
            //bandjes[1].prijs = parseFloat(bandjes[1].prijs) + parseFloat(vasteprijs);
        }
    }else if (dotblauw.value == 1) {
        if(bandjes[2].aantal == 0){
            //itemsinwinkelmandje.push(bandjes[2])
            //bandjes[2].aantal++;
            //itemslatenzieninpopup(2);
            itemToevoegenAanSessionstorage(2, bandjes[2].kleur);
        }
        else{
            //bandjes[2].aantal++;
            //bandjes[2].prijs = parseFloat(bandjes[2].prijs) + parseFloat(vasteprijs);
        }
    } else {
        if(bandjes[0].aantal == 0){
            //itemsinwinkelmandje.push(bandjes[0])
            //bandjes[0].aantal++;
            //itemslatenzieninpopup(0);
            itemToevoegenAanSessionstorage(0, bandjes[0].kleur);
        }
        else{
            //bandjes[0].aantal++;
            //bandjes[0].prijs = parseFloat(bandjes[0].prijs) + parseFloat(vasteprijs);
        }
    }
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
    if(sessionStorage.getItem("winkelwagen") == undefined){
        sessionStorage.setItem('winkelwagen',JSON.stringify(itemsinwinkelmandje));
    }else{
        sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
    }
    
    window.location = "./winkelmandje.html";
}


function itemToevoegenAanSessionstorage(nr, kleur){
    if(sessionStorage.getItem("winkelwagen") == undefined){
        
        itemsinwinkelmandje.push(bandjes[nr])
        bandjes[nr].aantal++;
        itemslatenzieninpopup(nr);
        console.log("kom hier on met een lege storage");
        console.log(itemsinwinkelmandje);
    }
    else{
        inputVanStorage = JSON.parse(sessionStorage.getItem('winkelwagen'));

        if(inputVanStorage.length == 3){
            inputVanStorage.forEach(element => {
                if(element.kleur == kleur){
                    element.aantal++;
                    element.prijs = parseFloat(element.prijs) + parseFloat(vasteprijs);
                    //inputVanStorage.push(inputVanStorage[j])
                    sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
                    itemslatenzieninpopup(nr);
                    console.log(inputVanStorage);
                }
            });
        }else{
            bandjes[nr].aantal++;
            inputVanStorage.push(bandjes[nr]);
            sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            itemslatenzieninpopup(nr);
        }

    }
}

        //for (let i = 0; i < bandjes.length; i++) {
        //    const element = array[index];
        //    
        //
        //    console.log("kom hier on met een volle storage");
        //    if (inputVanStorage.length == 3){
        //        for (let j = 0; j < bandjes.length; j++) {
        //            if(inputVanStorage[j].kleur == kleur){
        //                inputVanStorage[j].aantal++;
        //                inputVanStorage[j].prijs = parseFloat(inputVanStorage[j].prijs) + parseFloat(vasteprijs);
        //                //inputVanStorage.push(inputVanStorage[j])
        //                sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
        //                console.log(inputVanStorage);
        //            }
        //        }
        //    }else if(inputVanStorage[i].kleur == kleur){
//
        //    }
        //
        //}
        //    
            
                //if(inputVanStorage[i].kleur == kleur){
                //    inputVanStorage[i].aantal++;
                //    inputVanStorage[i].prijs = parseFloat(inputVanStorage[i].prijs) + parseFloat(vasteprijs);
                //     //inputVanStorage.push(inputVanStorage[j])
                //     sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
                //     console.log(inputVanStorage);
                //}
    
            //if (inputVanStorage[i].kleur == kleur && inputVanStorage[i].aantal >= 0 ){
            //    //if(inputVanStorage)
            //    console.log(inputVanStorage[i]);
            //    console.log(bandjes[i].kleur);
            //    for (let j = 0; j < bandjes.length; j++) {
            //        if(inputVanStorage[j].kleur == kleur){
            //            inputVanStorage[j].aantal++;
            //            inputVanStorage[j].prijs = parseFloat(inputVanStorage[j].prijs) + parseFloat(vasteprijs);
            //             //inputVanStorage.push(inputVanStorage[j])
            //             sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            //             console.log(inputVanStorage);
            //        }
            //    }
            //
            //    //inputVanStorage[i].aantal++;
            //    //inputVanStorage.push(bandjes[i])
            //    //sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            //    //console.log(inputVanStorage);
            //    itemslatenzieninpopup(i);
            //}
            //else{
            //    if(bandjes[i].kleur == kleur){
            //        
            //        inputVanStorage.push(bandjes[i])
            //        console.log(inputVanStorage);
            //        bandjes[i].aantal++;
            //        //bandjes[i].prijs = parseFloat(bandjes[i].prijs) + parseFloat(vasteprijs);
            //        sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            //        itemslatenzieninpopup(i);
            //    }
            //}

            //inputVanStorage.forEach(element => {
        //    console.log(element);
        //    if (element.kleur == kleur){
        //        element.aantal++;
        //        element.prijs = parseFloat(element.prijs) + parseFloat(vasteprijs);
        //        sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
        //        console.log(inputVanStorage);
        //        itemslatenzieninpopup(nr);
        //    }
        //    else{
        //        if(element.kleur == kleur){
        //            inputVanStorage.push(bandjes[nr])
        //            console.log(inputVanStorage);
        //            bandjes[nr].aantal++;
        //            sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
        //            itemslatenzieninpopup(nr);
        //        }
        //    }
        //});

        
        
        //inputVanStorage.forEach(element => {
        //    console.log(element);
        //    if (element.kleur == kleur){
        //        element.aantal++;
        //        element.prijs = parseFloat(element.prijs) + parseFloat(vasteprijs);
        //        sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
        //        console.log(inputVanStorage);
        //        itemslatenzieninpopup(nr);
        //    }
        //    else{
        //        if(element.kleur == kleur){
        //            inputVanStorage.push(bandjes[nr])
        //            console.log(inputVanStorage);
        //            bandjes[nr].aantal++;
        //            sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
        //            itemslatenzieninpopup(nr);
        //        }
        //    }
        //});
    






