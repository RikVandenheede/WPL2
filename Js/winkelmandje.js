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

    //////////////////////DIV ME EEN LEEG LIJNKE///////////////////////
    let qsd = document.createElement("div");
    qsd.className = "lijntje py-1";      ///!!!!!RIK PLEZ HELP!!!!!!////
    qsd.style.borderBottom = "1px solid #011627";
    qsd.id = "lijntje" + teller;
    document.getElementById("allinfoparent").appendChild(qsd);

    ////////////////////////////DETAILS BOX///////////////////////////////////
    //De hele div
    let divElementDetail = document.createElement("div");
    divElementDetail.className = "col-md-6 col-12 winkelmandje-details-box-info-details";
    divElementDetail.id = "detailsbox" + teller;
    document.getElementById("allinfobandje" + teller).appendChild(divElementDetail);

    //Details box
    let divElementDetailBox = document.createElement("div");
    divElementDetailBox.className = "row";
    divElementDetailBox.id = "detailsbandje" + teller;
    document.getElementById("detailsbox" + teller).appendChild(divElementDetailBox);

    //Div voor img
    let divElementDetailBoximg = document.createElement("div");
    divElementDetailBoximg.className = "col-md-6 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-details-product";
    divElementDetailBoximg.id = "imgdiv" + teller;
    document.getElementById("detailsbandje" + teller).appendChild(divElementDetailBoximg);

    //Img
    let imgElement = document.createElement("img");
    imgElement.setAttribute('src', element.img);
    imgElement.setAttribute('height', '150px');
    document.getElementById('imgdiv' + teller).appendChild(imgElement);

    //Div voor details
    let divElementDetailBoximgDetail = document.createElement("div");
    divElementDetailBoximgDetail.className = "col-md-6 col-12 d-flex justify-content-md-start justify-content-center pl-3 pt-4";
    divElementDetailBoximgDetail.id = "divdetailsdiv" + teller;
    document.getElementById("detailsbandje" + teller).appendChild(divElementDetailBoximgDetail);

    //Div voor details
    let divElementDetailBoximgDetailDiv = document.createElement("div");
    divElementDetailBoximgDetailDiv.className = "d-flex flex-column text-center text-md-left";
    divElementDetailBoximgDetailDiv.id = "divdetailsdivmain" + teller;
    document.getElementById("divdetailsdiv" + teller).appendChild(divElementDetailBoximgDetailDiv);

    //PingWing titel
    let divElementDetailH4 = document.createElement("h4");
    let divElementDetailH4Text = document.createTextNode(`PingWing`);
    divElementDetailH4.id = "Titelpingwing" + teller;
    divElementDetailH4.appendChild(divElementDetailH4Text);
    document.getElementById("divdetailsdivmain" + teller).appendChild(divElementDetailH4);

    //kleur van bandje
    let divElementDetailp = document.createElement("p");
    let divElementDetailpText = document.createTextNode(element.kleur);
    divElementDetailp.id = "Titelpingwing" + teller;
    divElementDetailp.appendChild(divElementDetailpText);
    document.getElementById("divdetailsdivmain" + teller).appendChild(divElementDetailp);

    //////////////////////////AANTAL PRIJS///////////////////////////
    //Div van aantal
    let divElementAantalBox = document.createElement("div");
    divElementAantalBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementAantalBox.id = "aantalDiv" + teller;
    document.getElementById("allinfobandje" + teller).appendChild(divElementAantalBox);

    //Div voor + 0 - 
    let divElementAantalDiv = document.createElement("div");
    divElementAantalDiv.id = "divaantalplusmin" + teller;
    document.getElementById("aantalDiv" + teller).appendChild(divElementAantalDiv);

    //Button voor - //TODO functie maken voor -
    let divElementAantalMinButton = document.createElement("button");
    let divElementAantalMinButtonText = document.createTextNode("-");
    divElementAantalMinButton.appendChild(divElementAantalMinButtonText);
    divElementAantalMinButton.className = "btn btn-secondary p-2";
    divElementAantalMinButton.id = "aantalbandjesDown" + teller;
    document.getElementById("divaantalplusmin" + teller).appendChild(divElementAantalMinButton);

    //Counter - aantal
    let divElementAantalCounter = document.createElement("output");
    let divElementAantalCounterText = document.createTextNode(element.aantal);
    divElementAantalCounter.appendChild(divElementAantalCounterText);
    divElementAantalCounter.id = "aantalBandjes" + teller;
    document.getElementById("divaantalplusmin" + teller).appendChild(divElementAantalCounter);

    //Button voor + //TODO functie maken voor +
    let divElementAantalPlusButton = document.createElement("button");
    let divElementAantalPlusButtonText = document.createTextNode("+");
    divElementAantalPlusButton.appendChild(divElementAantalPlusButtonText);
    divElementAantalPlusButton.className = "btn btn-secondary p-2";
    divElementAantalPlusButton.id = "aantalbandjesDown" + teller;
    document.getElementById("divaantalplusmin" + teller).appendChild(divElementAantalPlusButton);

    //////////////////////////PRIJS VAN 1 BANDJE///////////////////////////
    //Div Prijs
    let divElementPrijsBox = document.createElement("div");
    divElementPrijsBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementPrijsBox.id = "prijsDiv" + teller;
    document.getElementById("allinfobandje" + teller).appendChild(divElementPrijsBox);

    //Prijs content //TODO functie maken dat de prijs ????
    let divElementPrijspContent = document.createElement("p");
    let divElementPrijspContentText = document.createTextNode("€69.99");
    divElementPrijspContent.id = "a" + teller;
    divElementPrijspContent.appendChild(divElementPrijspContentText);
    document.getElementById("prijsDiv" + teller).appendChild(divElementPrijspContent);

    //////////////////////////TOTALE PRIJS//////////////////////////
    //Div totale prijs
    let divElementTotalePrijsBox = document.createElement("div");
    divElementTotalePrijsBox.className = "col-md-2 col-12 d-flex justify-content-md-start justify-content-center winkelmandje-details-box-info-Aantal-prijs-totaal pt-4";
    divElementTotalePrijsBox.id = "totalePrijsDiv" + teller;
    document.getElementById("allinfobandje" + teller).appendChild(divElementTotalePrijsBox);

    //content totale prijs P
    let divElementTotalePrijsP = document.createElement("p");
    let divElementTotalePrijsPContent = document.createTextNode(`€${element.prijs}`);
    divElementTotalePrijsP.appendChild(divElementTotalePrijsPContent);
    document.getElementById("totalePrijsDiv" + teller).appendChild(divElementTotalePrijsP);

    

});

//sessionStorage.setItem('test',JSON.stringify(winkelmandje));



//console.log();
//winkelmandje.push(JSON.parse(sessionStorage.getItem('winkelwagen')));
//console.log(winkelmandje);
//winkelmandje.push(inputVanStorage[0]);
//console.log(JSON.parse(sessionStorage.getItem('winkelwagen')));
//console.log(inputVanStorage[0].kleur);



