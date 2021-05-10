let userId = 0;
const naam = document.getElementById("naamUser");
const telefoon = document.getElementById("telefoonUser");
const mail = document.getElementById("mailUser");
const wachtwoord = document.getElementById("wachtwoordUser");
const straatNr = document.getElementById("straatUser");
const postcode = document.getElementById("postcodeUser");

document.getElementById("registreer").addEventListener("click", registreer);
document.getElementById("logIn").addEventListener("click", logIn);

function registreer(){
    function User(naam, telefoon, mail, wachtwoord, straatNr, postcode){
        this.naam = naam.value;
        this.telefoon = telefoon.value;
        this.mail = mail.value;
        this.wachtwoord = wachtwoord.value;
        this.straatNr = straatNr.value;
        this.postcode = postcode.value;
    }
    const user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);

    if(userId < sessionStorage.length -1){
        for(let i = 0; i < sessionStorage.length -1; i++){
            userId++;
        }
    }
    sessionStorage.setItem("user" + userId, JSON.stringify(user));
    userId++;
}

function logIn(){
    let mailLogIn = document.getElementById("mailInput").value;
    let wachtwoordLogIn = document.getElementById("wachtwoordInput").value;
    let mailPlusWachtwoord = mailLogIn+wachtwoordLogIn;
    let dataString = "";
    for(let i = 0; i< sessionStorage.length /*- 1*/; i++){
        let jsonData = sessionStorage.getItem("user" + i);
        let parsedJson = JSON.parse(jsonData);
        for(key in parsedJson){
            if(parsedJson[key] === mailLogIn){
                dataString += parsedJson[key];
            }else if(parsedJson[key] === wachtwoordLogIn){
                dataString += parsedJson[key];
                let showName = JSON.parse(sessionStorage.getItem("user" + i));
                sessionStorage.setItem("showName", showName.naam);
            }
        }
        if(mailPlusWachtwoord === dataString){
            window.location = "./index.html";
        }
    }
}