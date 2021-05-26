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
let inputVanStorage = JSON.parse(sessionStorage.getItem('winkelwagen'));

//let winkelmandje = [];

console.log(inputVanStorage);

let teller = 0;
//beep - boob kai the code generator
inputVanStorage.forEach(element => {
    teller++;

    //De hele div
    let divmain = document.createElement("div");
    divmain.className = "row md-5";
    divmain.id = "allinfobandje" + teller;
    document.getElementById("allinfoparent").appendChild(divmain);

   

    ////////////////////////////DETAILS BOX///////////////////////////////////
    //De hele div
    let divElementDetail = document.createElement("div");
    divElementDetail.className = "col-md-6 col-12 winkelmandje-details-box-info-details";
    divElementDetail.id = "detailsbox";
    document.getElementById("allinfobandje" + teller).appendChild(divElementDetail);

    //Details box
    let divElementDetailBox = document.createElement("div");
    divElementDetailBox.className = "row";
    divElementDetailBox.id = "detailsbandje";
    document.getElementById("detailsbox").appendChild(divElementDetailBox);

    //Div voor img
    let divElementDetailBoximg = document.createElement("div");
    divElementDetailBoximg.className = "col-md-6 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-details-product";
    divElementDetailBoximg.id = "imgdiv";
    document.getElementById("detailsbandje").appendChild(divElementDetailBoximg);

    //Img
    let imgElement = document.createElement("img");
    imgElement.setAttribute('src', element.img);
    imgElement.setAttribute('height', '150px');
    document.getElementById('imgdiv').appendChild(imgElement);

    //Div voor details
    let divElementDetailBoximgDetail = document.createElement("div");
    divElementDetailBoximgDetail.className = "col-md-6 col-12 d-flex justify-content-md-start justify-content-center pl-3 pt-4";
    divElementDetailBoximgDetail.id = "divdetailsdiv";
    document.getElementById("detailsbandje").appendChild(divElementDetailBoximgDetail);

    //Div voor details
    let divElementDetailBoximgDetailDiv = document.createElement("div");
    divElementDetailBoximgDetailDiv.className = "d-flex flex-column text-center text-md-left";
    divElementDetailBoximgDetailDiv.id = "divdetailsdivmain";
    document.getElementById("divdetailsdiv").appendChild(divElementDetailBoximgDetailDiv);

    //PingWing titel
    let divElementDetailH4 = document.createElement("h4");
    let divElementDetailH4Text = document.createTextNode(`PingWing`);
    divElementDetailH4.id = "Titelpingwing";
    divElementDetailH4.appendChild(divElementDetailH4Text);
    document.getElementById("divdetailsdivmain").appendChild(divElementDetailH4);

    //kleur van bandje
    let divElementDetailp = document.createElement("p");
    let divElementDetailpText = document.createTextNode(element.kleur);
    divElementDetailp.id = "Titelpingwing";
    divElementDetailp.appendChild(divElementDetailpText);
    document.getElementById("divdetailsdivmain").appendChild(divElementDetailp);

    //////////////////////////AANTAL PRIJS///////////////////////////
    //Div van aantal
    let divElementAantalBox = document.createElement("div");
    divElementAantalBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementAantalBox.id = "aantalDiv";
    document.getElementById("allinfobandje" + teller).appendChild(divElementAantalBox);

    //Div voor + 0 - 
    let divElementAantalDiv = document.createElement("div");
    divElementAantalDiv.id = "divaantalplusmin";
    document.getElementById("aantalDiv").appendChild(divElementAantalDiv);

    //Button voor - //TODO functie maken voor -
    let divElementAantalMinButton = document.createElement("button");
    let divElementAantalMinButtonText = document.createTextNode("-");
    divElementAantalMinButton.appendChild(divElementAantalMinButtonText);
    divElementAantalMinButton.className = "btn btn-secondary p-2";
    divElementAantalMinButton.id = "aantalbandjesDown";
    document.getElementById("divaantalplusmin").appendChild(divElementAantalMinButton);

    //Counter - aantal
    let divElementAantalCounter = document.createElement("output");
    let divElementAantalCounterText = document.createTextNode(element.aantal);
    divElementAantalCounter.appendChild(divElementAantalCounterText);
    divElementAantalCounter.id = "aantalBandjes";
    document.getElementById("divaantalplusmin").appendChild(divElementAantalCounter);

    //Button voor + //TODO functie maken voor +
    let divElementAantalPlusButton = document.createElement("button");
    let divElementAantalPlusButtonText = document.createTextNode("+");
    divElementAantalPlusButton.appendChild(divElementAantalPlusButtonText);
    divElementAantalPlusButton.className = "btn btn-secondary p-2";
    divElementAantalPlusButton.id = "aantalbandjesDown";
    document.getElementById("divaantalplusmin").appendChild(divElementAantalPlusButton);

    //////////////////////////PRIJS VAN 1 BANDJE///////////////////////////
    //Div Prijs
    let divElementPrijsBox = document.createElement("div");
    divElementPrijsBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementPrijsBox.id = "prijsDiv";
    document.getElementById("allinfobandje" + teller).appendChild(divElementPrijsBox);

    //Prijs content //TODO functie maken dat de prijs ????
    let divElementPrijspContent = document.createElement("p");
    let divElementPrijspContentText = document.createTextNode("€69.99");
    divElementPrijspContent.id = "a";
    divElementPrijspContent.appendChild(divElementPrijspContentText);
    document.getElementById("prijsDiv").appendChild(divElementPrijspContent);

    //////////////////////////TOTALE PRIJS//////////////////////////
    //Div totale prijs
    let divElementTotalePrijsBox = document.createElement("div");
    divElementTotalePrijsBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementTotalePrijsBox.id = "totalePrijsDiv";
    document.getElementById("allinfobandje" + teller).appendChild(divElementTotalePrijsBox);

    //content totale prijs P
    let divElementTotalePrijsP = document.createElement("p");
    let divElementTotalePrijsPContent = document.createTextNode(`€${element.prijs}`);
    divElementTotalePrijsP.appendChild(divElementTotalePrijsPContent);
    document.getElementById("totalePrijsDiv").appendChild(divElementTotalePrijsP);

});

//sessionStorage.setItem('test',JSON.stringify(winkelmandje));



//console.log();
//winkelmandje.push(JSON.parse(sessionStorage.getItem('winkelwagen')));
//console.log(winkelmandje);
//winkelmandje.push(inputVanStorage[0]);
//console.log(JSON.parse(sessionStorage.getItem('winkelwagen')));
//console.log(inputVanStorage[0].kleur);



