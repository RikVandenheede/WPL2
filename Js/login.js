"use strict";

// Variabelen
let userId = 0;
let myArr = [];
const loginMsg = document.querySelector(".melding-login");
const registreerMsg = document.querySelector(".melding-registreer");
const success = registreerMsg.getElementsByTagName("p")[1];
const error = registreerMsg.getElementsByTagName("p")[0];
const checkboxMsg = document.getElementById("vinkje");
const checkbox = document.getElementById("akkoord-vinkje");

const naam = document.getElementById("naamuser");
const telefoon = document.getElementById("telefoonuser");
const mail = document.getElementById("mailuser");
const wachtwoord = document.getElementById("wachtwoorduser");
const straatNr = document.getElementById("straatuser");
const postcode = document.getElementById("postcodeuser");

// Event listeners
document.getElementById("registreer").addEventListener("click", registreer);
document.getElementById("login").addEventListener("click", login);

// Regex 
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Constructor functie voor het aanmaken van een gebruiker
function User(naam, telefoon, mail, wachtwoord, straatNr, postcode) { // geeft de waarden van lijn 40 mee(als parameters) en maakt een user aan met deze propertie values
    this.naam = naam.value;
    this.telefoon = telefoon.value;
    this.mail = mail.value;
    this.wachtwoord = wachtwoord.value;
    this.straatNr = straatNr.value;
    this.postcode = postcode.value;
}

function registreer() {
    const user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode); // op het klikken wordt er een user aangemaakt met deze argumenten
    let teller = 0;
    if(naam.value === "" ){
        naam.style.border = "1px solid red";
        error.style.cssText = "visibility: visible; position: unset;";
    }else{
        naam.style.border = "none";
        teller++;
    }
    if(wachtwoord.value === ""){
        wachtwoord.style.border = "1px solid red";
        error.style.cssText = "visibility: visible; position: unset;";
    }else{
        wachtwoord.style.border = "none";
        teller++;
    }
    if(!validateEmail(mail.value)){
        mail.style.border = "1px solid red";
        error.style.cssText = "visibility: visible; position: unset;";
    }else{
        mail.style.border = "none";
        teller++;
    }
    if(checkbox.checked == false){
        checkbox.style.outline = "1px solid red";
        error.style.cssText = "visibility: visible; position: unset;";
        checkboxMsg.style.color = "red";
    }else{
        checkbox.style.outline = "none";
        checkboxMsg.style.color = "black";
        teller++;
    }
    if(teller === 4){
        if(userId < sessionStorage.length) {
            for (let i = 0; i < sessionStorage.length; i++) {
                userId++;
            }
        }
        myArr.push(user);
        sessionStorage.setItem("users" , JSON.stringify(myArr));
        userId++;
        error.style.cssText = "visibility: hidden; position: absolute;";
        success.style.cssText = "visibility: visible; position: unset;";
        document.getElementById("form-registreer").reset();
    }
}
function login() {
    const mailLogIn = document.getElementById("mailinput").value;
    const wachtwoordLogIn = document.getElementById("wachtwoordinput").value;
    if (mailLogIn !== "" && wachtwoordLogIn !== "") {
        let users = sessionStorage.getItem("users");
        let parsedUsers = JSON.parse(users);
        parsedUsers.forEach(user => {
            if(user.mail === mailLogIn && user.wachtwoord === wachtwoordLogIn){
                loginMsg.style.cssText = "visibility: hidden; position: absolute;";
                sessionStorage.setItem("showName", user.naam);
                sessionStorage.setItem("groet", false);
                sessionStorage.setItem("alert", false);
                window.location = "./index.html";
            }else {
                loginMsg.style.cssText = "visibility: visible; position: unset;";
            }
        });
    } else {
        loginMsg.style.cssText = "visibility: visible; position: unset;";
    }
}
/*
function login() {
    const mailLogIn = document.getElementById("mailinput").value;
    const wachtwoordLogIn = document.getElementById("wachtwoordinput").value;
    if (mailLogIn !== "" && wachtwoordLogIn !== "") {
        for (let i = 0; i < sessionStorage.length; i++) {
            let jsonData = sessionStorage.getItem("user" + i);
            let parsedJson = JSON.parse(jsonData);
            if (parsedJson !== null) {
                if (parsedJson.mail === mailLogIn && parsedJson.wachtwoord === wachtwoordLogIn) {
                    loginMsg.style.cssText = "visibility: hidden; position: absolute;";
                    let showName = JSON.parse(sessionStorage.getItem("user" + i));
                    sessionStorage.setItem("showName", showName.naam);
                    sessionStorage.setItem("groet", false);
                    sessionStorage.setItem("alert", false);
                    window.location = "./index.html";
                } else {
                    loginMsg.style.cssText = "visibility: visible; position: unset;";
                }
            }
        }
    } else {
        loginMsg.style.cssText = "visibility: visible; position: unset;";
    }
}
*/