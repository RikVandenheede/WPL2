function Database(voornaam, achternaam, gebruikersnaam, wachtwoord, email){
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.gebruikersnaam = gebruikersnaam;
    this.wachtwoord = wachtwoord;
    this.email = email;
}

let arisha = new Database("Arisha", "Mezienova", "arishaM", "test1", "...@student.pxl.be");
let kai = new Database("Kai", "Meyers", "KaiM", "test2", "...@student.pxl.be");
let thymen = new Database("Thymen", "Willemsen", "ThymenW", "test3", "...@student.pxl.be");
let dries = new Database("Dries", "Roefs", "DriesR", "test4", "...@student.pxl.be");
let rik = new Database("Rik", "Vandenheede", "RikV", "test5", "...@student.pxl.be");