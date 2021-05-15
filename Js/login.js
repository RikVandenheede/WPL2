let userId = 0;
let loginError = false;
const naam = document.getElementById("naamuser");
const telefoon = document.getElementById("telefoonuser");
const mail = document.getElementById("mailuser");
const wachtwoord = document.getElementById("wachtwoorduser");
const straatNr = document.getElementById("straatuser");
const postcode = document.getElementById("postcodeuser");

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
    const user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);
    if(user.naam !== "" && user.mail !== "" && user.wachtwoord !== ""){
        if(userId < sessionStorage.length){
            for(let i = 0; i < sessionStorage.length; i++){
                userId++;
            }
        }
        sessionStorage.setItem("user" + userId, JSON.stringify(user));
        userId++;
        document.getElementById("form-registreer").reset();
    }else{
        document.querySelector(".foutmelding-registreer").style.cssText = "visibility: visible; position: unset;";
    }
}

function login(){
    const mailLogIn = document.getElementById("mailinput").value;
    const wachtwoordLogIn = document.getElementById("wachtwoordinput").value;
    if(mailLogIn === "" && wachtwoordLogIn === ""){
        document.querySelector(".foutmelding-login").style.cssText = "visibility: visible; position: unset;";
    }else{
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
                    document.querySelector(".foutmelding-login").style.cssText = "visibility: visible; position: unset;";
                }
            }else{
                document.querySelector(".foutmelding-login").style.cssText = "visibility: visible; position: unset;";
            }
        }
    }
}

((laatNaamZien, groet) =>{
    if(groet){
        WelcomeName = laatNaamZien.charAt(0).toUpperCase() + laatNaamZien.substring(1);
        return document.getElementById("naam").innerHTML = WelcomeName;
    }
})(sessionStorage.getItem("showName"), (sessionStorage.getItem("groet")));