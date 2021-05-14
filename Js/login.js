let userId = 0;
const naam = document.getElementById("naamUser");
const telefoon = document.getElementById("telefoonUser");
const mail = document.getElementById("mailUser");
const wachtwoord = document.getElementById("wachtwoordUser");
const straatNr = document.getElementById("straatUser");
const postcode = document.getElementById("postcodeUser");

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

    if(userId < sessionStorage.length){
        for(let i = 0; i < sessionStorage.length; i++){
            userId++;
        }
    }
    sessionStorage.setItem("user" + userId, JSON.stringify(user));
    userId++;
}

function login(){
    let mailLogIn = document.getElementById("mailinput").value;
    let wachtwoordLogIn = document.getElementById("wachtwoordinput").value;
    for(let i = 0; i < sessionStorage.length; i++){
        let jsonData = sessionStorage.getItem("user" + i);
        let parsedJson = JSON.parse(jsonData);
        if(parsedJson !== null){
            if(parsedJson.mail === mailLogIn && parsedJson.wachtwoord === wachtwoordLogIn){
                let showName = JSON.parse(sessionStorage.getItem("user" + i));
                sessionStorage.setItem("showName", showName.naam);
                sessionStorage.setItem("groet", false);
                window.location = "./index.html";
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