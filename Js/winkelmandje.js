"use strict";
//
//let aantal = 0;
//let prijsBandje = 69.99;
//
//document.getElementById("aantalbandjesUp").addEventListener("click", bandjesUp);
//document.getElementById("aantalbandjesDown").addEventListener("click", bandjesDown);
//document.getElementById("aantalbandjesDown").disabled = false; 
//
//function bandjesUp(){
//    document.getElementById("aantalbandjesDown").disabled = false; 
//    aantal++;
//    document.getElementById("aantalBandjes").innerText = aantal;
//    document.getElementById("prijs1Bandje").innerText = prijsBandje;
//    document.getElementById("prijsAlleBandjes").innerText = (prijsBandje * aantal).toFixed(2);
//}
//function bandjesDown(){
//    aantal--;
//    let aantalB = document.getElementById("aantalBandjes").value;
//    if(aantalB <= 0){
//        document.getElementById("aantalbandjesDown").disabled = true;
//    }else{
//        document.getElementById("aantalBandjes").innerText = aantal;
//        document.getElementById("prijsAlleBandjes").innerText = Math.abs(0 - (prijsBandje * aantal)).toFixed(2);
//    }
//}
let inputvanstorage = JSON.parse(sessionStorage.getItem('winkelwagen'));
let winkelmandje = [];

console.log(inputvanstorage[0]);

inputvanstorage.forEach(element => {
    winkelmandje.push(element);
});




//console.log();
//winkelmandje.push(JSON.parse(sessionStorage.getItem('winkelwagen')));
console.log(winkelmandje);
//winkelmandje.push(inputvanstorage[0]);
//console.log(JSON.parse(sessionStorage.getItem('winkelwagen')));
//console.log(inputvanstorage[0].kleur);



