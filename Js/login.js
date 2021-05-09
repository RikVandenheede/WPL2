/*
function User(voornaam, achternaam, gebruikersnaam, wachtwoord, email){
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.gebruikersnaam = gebruikersnaam;
        this.wachtwoord = wachtwoord;
        this.email = email;
}

let arisha = new User("Arisha", "Mezienova", "arishaM", "test1", "...@student.pxl.be");
let kai = new User("Kai", "Meyers", "KaiM", "test2", "...@student.pxl.be");
let thymen = new User("Thymen", "Willemsen", "ThymenW", "test3", "...@student.pxl.be");
let dries = new User("Dries", "Roefs", "DriesR", "test4", "...@student.pxl.be");
let rik = new User("Rik", "Vandenheede", "RikV", "test5", "...@student.pxl.be");

let MyArr = [arisha, kai, thymen, dries, rik];

sessionStorage.setItem("user", JSON.stringify(MyArr[4]));
console.log(JSON.parse(sessionStorage.getItem("user")));
*/

let userId = 0;

document.getElementById("registreer").addEventListener("click", registreer);
document.getElementById("logIn").addEventListener("click", logIn);

function registreer(){
    let naam = document.getElementById("naamUser").value;
    let telefoon = document.getElementById("telefoonUser").value;
    let mail = document.getElementById("mailUser").value;
    let wachtwoord = document.getElementById("wachtwoordUser").value;
    let straatNr = document.getElementById("straatUser").value;
    let postcode = document.getElementById("postcodeUser").value;

    function User(naam, telefoon, mail, wachtwoord, straatNr, postcode){
        this.naam = naam;
        this.telefoon = telefoon;
        this.mail = mail;
        this.wachtwoord = wachtwoord;
        this.straatNr = straatNr;
        this.postcode = postcode;
    }
    let user = new User(naam, telefoon, mail, wachtwoord, straatNr, postcode);

    sessionStorage.setItem("user" + userId, JSON.stringify(user));
    userId++;
}
function logIn(){
    let mailLogIn = document.getElementById("mailInput").value;
    let wachtwoordLogIn = document.getElementById("wachtwoordInput").value;
    for(let i = 0; i < sessionStorage.length; i++){
        if(mailLogIn === JSON.parse(sessionStorage.getItem("user"+i)) && wachtwoordLogIn === JSON.parse(sessionStorage.getItem("user"+i))){
            window.location = "./index.html";
        }
    }
}