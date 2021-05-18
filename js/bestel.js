//html elementen
let dotrood = document.getElementById("dotrood");
let dotgeel = document.getElementById("dotgeel");
let dotblauw = document.getElementById("dotblauw");
let imgbandje = document.getElementById("imgbandje");
let inwinkelmandjebutton = document.getElementById("inwinkelmandje");

//variable
let vasteprijs = '69.99';
let bandjes = [
    {kleur:'Rood', prijs: vasteprijs, aantal: 0, img:'./images/BandRoodPingGroen.png'},
    {kleur:'Geel', prijs: vasteprijs, aantal: 0, img:'./images/BandGeelPingGroen.png'},
    {kleur:'Blauw', prijs: vasteprijs, aantal: 0, img:'./images/BnadTurqPingGroen.png'}
];
let itemsinwinkelmandje = [];


//eventhandelers
dotrood.addEventListener("click", clickondotrood);
dotgeel.addEventListener("click", clickondotgeel);
dotblauw.addEventListener("click", clickondotblauw);
inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje);

//div per element
let divelement = document.createElement("div");
divelement.id = "maindiv";
document.getElementById('modalbody').appendChild(divelement);

//Op welke kleur je klikt
function clickondotrood(){
    dotrood.style.border = "solid 2px black";
    dotgeel.style.border = "none";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandRoodPingGroen.png";
    dotrood.value = 1;
    dotgeel.value = 0;
    dotblauw.value = 0;
}
function clickondotgeel(){
    dotrood.style.border = "none";
    dotgeel.style.border = "solid 2px black";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandGeelPingGroen.png";
    dotrood.value = 0;
    dotgeel.value = 1;
    dotblauw.value = 0;
}
function clickondotblauw(){
    dotrood.style.border = "none";
    dotgeel.style.border = "none";
    dotblauw.style.border = "solid 2px black"; 
    imgbandje.src = "./images/BnadTurqPingGroen.png";
    dotrood.value = 0;
    dotgeel.value = 0;
    dotblauw.value = 1;
}

//toevoegen aan de winkelmand
function toevoegenaanwinkelmandje(){

    if(dotgeel.value == 1){
        if(bandjes[1].aantal == 0){
            itemsinwinkelmandje.push(bandjes[1])
            bandjes[1].aantal++;
            itemslatenzieninpopup(1);
        }
        else{
            bandjes[1].aantal++;
            bandjes[1].prijs = parseFloat(bandjes[1].prijs) + parseFloat(vasteprijs);
        }
    }else if (dotblauw.value == 1) {
        if(bandjes[2].aantal == 0){
            itemsinwinkelmandje.push(bandjes[2])
            bandjes[2].aantal++;
            itemslatenzieninpopup(2);
        }
        else{
            bandjes[2].aantal++;
            bandjes[2].prijs = parseFloat(bandjes[2].prijs) + parseFloat(vasteprijs);
        }
    } else {
        if(bandjes[0].aantal == 0){
            itemsinwinkelmandje.push(bandjes[0])
            bandjes[0].aantal++;
            itemslatenzieninpopup(0);
        }
        else{
            bandjes[0].aantal++;
            bandjes[0].prijs = parseFloat(bandjes[0].prijs) + parseFloat(vasteprijs);
        }
    }
    console.log(itemsinwinkelmandje);
}

//Items laten zien in pop-up
function itemslatenzieninpopup(nr){
    
    let teller;
    
    let divelement2 = document.createElement("div");
    divelement2.id = `itemdiv2`;
    divelement2.style.display = "flex";
    //divelement2.style.justifyContent = "center";
    document.getElementById('maindiv').appendChild(divelement2);

    //img per element
    let imgelement = document.createElement("img");
    imgelement.setAttribute('src', bandjes[nr].img);
    imgelement.setAttribute('height', '150px');
    document.getElementById('itemdiv2').appendChild(imgelement);

    //welke kleur het bandje is
    let newP = document.createElement("p");
    newP.id = "testid";
    let newPText = document.createTextNode(bandjes[nr].kleur);
    newP.appendChild(newPText);
    document.getElementById("itemdiv2").appendChild(newP);


    console.log(itemsinwinkelmandje);
}

