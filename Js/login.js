"use strict";

let userId = 0;
let loginMsg = document.querySelector(".melding-login");
let registreerMsg = document.querySelector(".melding-registreer");
let success = registreerMsg.getElementsByTagName("p")[1];
let error = registreerMsg.getElementsByTagName("p")[0];
let checkboxMsg = document.getElementById("vinkje");
let checkbox = document.getElementById("akkoord-vinkje");

let naam = document.getElementById("naamuser");
let telefoon = document.getElementById("telefoonuser");
let mail = document.getElementById("mailuser");
let wachtwoord = document.getElementById("wachtwoorduser");
let straatNr = document.getElementById("straatuser");
let postcode = document.getElementById("postcodeuser");

document.getElementById("registreer").addEventListener("click", registreer);
document.getElementById("login").addEventListener("click", login);

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function User(naam, telefoon, mail, wachtwoord, straatNr, postcode) {
    this.naam = naam.value;
    this.telefoon = telefoon.value;
    this.mail = mail.value;
    this.wachtwoord = wachtwoord.value;
    this.straatNr = straatNr.value;
    this.postcode = postcode.value;
}
function registreer() {
    const user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);
    console.log(mail.value);
    if(naam.value === "" || mail.value === "" || wachtwoord.value === "" || checkbox.checked === false || !validateEmail(mail.value)){
        error.style.cssText = "visibility: visible; position: unset;";
        success.style.cssText = "visibility: hidden; position: absolute;";
    }
    else{
        if(userId < sessionStorage.length) {
            for (let i = 0; i < sessionStorage.length; i++) {
                userId++;
            }
        }
        sessionStorage.setItem("user" + userId, JSON.stringify(user));
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
        for (let i = 0; i < sessionStorage.length; i++) {
            let jsonData = sessionStorage.getItem("user" + i);
            let parsedJson = JSON.parse(jsonData);
            if (parsedJson !== null) {
                if (parsedJson.mail === mailLogIn && parsedJson.wachtwoord === wachtwoordLogIn) {
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