"use strict";
window.addEventListener("load", generateItems);

//variable
let betaalbutton = document.getElementById("betaalbutton");
betaalbutton.addEventListener("click", betaald);
let inputVanStorage = JSON.parse(sessionStorage.getItem('winkelwagen'));
let totaleaankoopprijs = document.getElementById("totaleaankoopprijs");
let teller = 0;
let totaal = 0.00;
const prijsBandje = 69.99;
const promocode = "Team1Ftw";

function generateItems(){
    if(inputVanStorage != null){
        inputVanStorage.forEach(element => {
            teller++;
            document.getElementById("emptyStateDiv").style.cssText = "visibility: hidden; position: absolute;";
        
            //De hele div
            let divmain = document.createElement("div");
            divmain.style.cssText = "border-bottom: 1px solid rgba(0,0,0, 0.2);";
            divmain.className = "row md-5";
            divmain.id = "allinfobandje" + teller;
            document.getElementById("allinfoparent").appendChild(divmain);
        
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
            document.getElementById("aantalbandjesDown" + teller).addEventListener("click", function() {
            
                if(element.aantal <= 1){
                    //remove div en lijnke
                    divmain.remove();
                    sidebarDiv.remove();
                    //remove item from array
                    let index = inputVanStorage.findIndex(x => x.kleur === element.kleur);
                    inputVanStorage.splice(index, 1);
                    sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
                }
                element.prijs =  element.prijs - prijsBandje;
                element.aantal--;
                divElementAantalCounter.innerHTML = element.aantal;
                divElementTotalePrijsP.innerText = `€ ${element.prijs.toFixed(2)}`;
                prijsPerItem.innerText = `€ ${element.prijs.toFixed(2)}`;
                aantalPerItemP.innerHTML = `${element.aantal} x`;
                totaal = totaal - prijsBandje;
                totaleaankoopprijs.innerText = `€ ${totaal.toFixed(2)}`;
                sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            });
        
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
            divElementAantalPlusButton.id = "aantalbandjesUp" + teller;
            document.getElementById("divaantalplusmin" + teller).appendChild(divElementAantalPlusButton);
            document.getElementById("aantalbandjesUp" + teller).addEventListener("click", function() {
                element.prijs =+ element.prijs + prijsBandje;
                element.aantal++;
                divElementAantalCounter.innerHTML = element.aantal;
                divElementTotalePrijsP.innerText = `€ ${element.prijs.toFixed(2)}`;
                aantalPerItemP.innerHTML = `${element.aantal} x`;
                prijsPerItem.innerText = `€ ${element.prijs.toFixed(2)}`;
                totaal = totaal + prijsBandje;
                totaleaankoopprijs.innerText = `€ ${totaal.toFixed(2)}`;
                sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
            });
        
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
            let divElementTotalePrijsPContent = document.createTextNode(`€ ${parseFloat(element.prijs).toFixed(2)}`);
            divElementTotalePrijsP.appendChild(divElementTotalePrijsPContent);
            document.getElementById("totalePrijsDiv" + teller).appendChild(divElementTotalePrijsP);

            ////////////////////////////////////////////////////////////////////
            //////////////////////////////SIDEBAR///////////////////////////////
            ////////////////////////////////////////////////////////////////////

            //Content div per item
            let sidebarDiv = document.createElement("div");
            sidebarDiv.className = "col-12 winkelmandje-betalen-aantal py-3";
            sidebarDiv.id = "item" + teller;
            document.getElementById("sidebar").insertBefore(sidebarDiv,document.getElementById("totaalprijs"));

            //item aantal
            let aantalPerItemP = document.createElement("p");
            let aantalPerItemPContent = document.createTextNode(`${element.aantal} x`);
            aantalPerItemP.appendChild(aantalPerItemPContent);
            document.getElementById("item" + teller).appendChild(aantalPerItemP);

            //div
            let divNaamPrijs = document.createElement("div");
            divNaamPrijs.className = "d-flex justify-content-between";
            document.getElementById("item" + teller).appendChild(divNaamPrijs);

            //Naam
            let naamPerItem = document.createElement("p");
            let naamPerItemContent = document.createTextNode(`PingWing - ${element.kleur}`);
            naamPerItem.appendChild(naamPerItemContent);
            document.getElementById("item" + teller).appendChild(naamPerItem);


            //prijs
            let prijsPerItem = document.createElement("p");
            let prijsPerItemContent = document.createTextNode(`€ ${parseFloat(element.prijs).toFixed(2)}`);
            prijsPerItem.appendChild(prijsPerItemContent);
            document.getElementById("item" + teller).appendChild(prijsPerItem);

            totaalprijsmaken();
            function totaalprijsmaken(){
                totaal = parseFloat(totaal) + parseFloat(element.prijs);
                totaleaankoopprijs.innerText = `€ ${totaal.toFixed(2)}`;
            }
        });
    }else{
        document.getElementById("emptyStateDiv").style.cssText = "visibility: visible; position: unset;";
    }

}

setInterval(function(){ 
    if (document.getElementById("promocodeBox").value == promocode){

        let eindTotaalMinKorting = (totaal * 0.9);
        totaleaankoopprijs.innerText = `€ ${eindTotaalMinKorting.toFixed(2)}`
        //Team1Ftw
        document.getElementById("okeBoxDiv").style.cssText = "visibility: visible; position: unset;";
    }
}, 300);

function betaald (){
    sessionStorage.removeItem('winkelwagen');
}


