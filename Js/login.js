const naam = document.getElementById("naamUser");
const telefoon = document.getElementById("telefoonUser");
const mail = document.getElementById("mailUser");
const wachtwoord = document.getElementById("wachtwoordUser");
const straatNr = document.getElementById("straatUser");
const postcode = document.getElementById("postcodeUser");
let userId = 0;
let gebruiker;

class User{
    constructor(naam, telefoon, mail, wachtwoord, straatNr, postcode){
        this.naam = naam.value;
        this.telefoon = telefoon.value;
        this.mail = mail.value;
        this.wachtwoord = wachtwoord.value;
        this.straatNr = straatNr.value;
        this.postcode = postcode.value;
    }
    maakAan(){
        if(userId < sessionStorage.length -1){
            for(let i = 0; i < sessionStorage.length -1; i++){
                userId++;
            }
        }
        sessionStorage.setItem("gebruiker" + userId, JSON.stringify(gebruiker));
        userId++;
    }
}

document.getElementById("registreer").addEventListener("click", () =>{
    gebruiker = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);
    gebruiker.maakAan();
});

document.getElementById("logIn").addEventListener("click", () =>{
    // uitvoering bij Log in(OverOns)
});