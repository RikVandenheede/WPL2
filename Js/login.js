"use strict";

let userId = 0;
let loginMsg = document.querySelector(".melding-login");
let registreerMsg = document.querySelector(".melding-registreer");
let success = registreerMsg.getElementsByTagName("p")[1];
let error = registreerMsg.getElementsByTagName("p")[0];
let checkboxMsg = document.getElementById("vinkje");
let checkbox = document.getElementById("akkoord-vinkje");

const inputGebruiker = {
    naam : document.getElementById("naamuser"),
    telefoon : document.getElementById("telefoonuser"),
    mail : document.getElementById("mailuser"),
    wachtwoord : document.getElementById("wachtwoorduser"),
    straatNr : document.getElementById("straatuser"),
    postcode : document.getElementById("postcodeuser")
};

document.getElementById("registreer").addEventListener("click", registreer);
document.getElementById("login").addEventListener("click", login);

function User(naam, telefoon, mail, wachtwoord, straatNr, postcode){
    this.naam = naam.value;
    this.telefoon = telefoon.value;
    this.mail = mail.value;
    this.wachtwoord = wachtwoord.value;
    this.straatNr = straatNr.value;
    this.postcode = postcode.value;
}

function registreer(){
    const {naam, telefoon, mail, wachtwoord, straatNr, postcode} = inputGebruiker;
    const user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);

    if(user.naam !== "" && user.mail !== "" && user.wachtwoord !== "" && checkbox.checked  !== false){
        if(userId < sessionStorage.length){
            for(let i = 0; i < sessionStorage.length; i++){
                userId++;
            }
        }
        sessionStorage.setItem("user" + userId, JSON.stringify(user));
        userId++;
        error.style.cssText = "visibility: hidden; position: absolute;";
        success.style.cssText = "visibility: visible; position: unset;";
        checkboxMsg.style.cssText = "color: black;";
        checkbox.style.cssText = "color: black;";
        document.getElementById("form-registreer").reset();
    }else{
        error.style.cssText = "visibility: visible; position: unset;";
        success.style.cssText = "visibility: hidden; position: absolute;";
        checkboxMsg.style.cssText = "color: red;";
        checkbox.style.cssText = "outline: 1px solid red;";
    }
}

function login(){
    const mailLogIn = document.getElementById("mailinput").value;
    const wachtwoordLogIn = document.getElementById("wachtwoordinput").value;
    if(mailLogIn !== "" && wachtwoordLogIn !== ""){
        for(let i = 0; i < sessionStorage.length; i++){
            let jsonData = sessionStorage.getItem("user" + i);
            let parsedJson = JSON.parse(jsonData);
            if(parsedJson !== null){
                if(parsedJson.mail === mailLogIn && parsedJson.wachtwoord === wachtwoordLogIn){
                    let showName = JSON.parse(sessionStorage.getItem("user" + i));
                    sessionStorage.setItem("showName", showName.naam);
                    sessionStorage.setItem("groet", false);
                    window.location = "./index.html";
                }else{
                    loginMsg.style.cssText = "visibility: visible; position: unset;";
                }
            }
        }
    }else{
        loginMsg.style.cssText = "visibility: visible; position: unset;";
    }
}