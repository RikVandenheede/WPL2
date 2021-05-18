//variable
let dotrood = document.getElementById("dotrood");
let dotgeel = document.getElementById("dotgeel");
let dotblauw = document.getElementById("dotblauw");
let imgbandje = document.getElementById("imgbandje");
let inwinkelmandjebutton = document.getElementById("inwinkelmandje");

let bandjes = [
    {kleur:'Rood', prijs:'69,99', aantal: 1},
    {kleur:'Geel', prijs:'69,99', aantal: 1},
    {kleur:'Blauw', prijs:'69,99', aantal: 1}
];

let itemsinwinkelmandje = [];

//eventhandelers
dotrood.addEventListener("click", clickondotrood);
dotgeel.addEventListener("click", clickondotgeel);
dotblauw.addEventListener("click", clickondotblauw);
//inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje);

//Op welke kleur je klikt
function clickondotrood(){
    dotrood.style.border = "solid 2px black";
    dotgeel.style.border = "none";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandRoodPingGroen.png";
    if(inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje)){
        toevoegenaanwinkelmandje();
    }
    
}
function clickondotgeel(){
    dotrood.style.border = "none";
    dotgeel.style.border = "solid 2px black";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandGeelPingGroen.png";

    if(inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje)){
        toevoegenaanwinkelmandje(1);
    }
    //inwinkelmandjebutton.addEventListener("click", itemsinwinkelmandje.push(bandjes[1]));
    //console.log(itemsinwinkelmandje);
    //if(inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje)){
    //    itemsinwinkelmandje.push(bandjes[1]);
    //    //toevoegenaanwinkelmandje(bandjes);
    //}
    //toevoegenaanwinkelmandje(bandjes[1]);
    //if(inwinkelmandjebutton.clicked==   true) {
    //    console.log("Button Clicked");
    //}

    //inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje(bandjes[1]));
}
function clickondotblauw(){
    dotrood.style.border = "none";
    dotgeel.style.border = "none";
    dotblauw.style.border = "solid 2px black"; 
    imgbandje.src = "./images/BnadTurqPingGroen.png";
    if(inwinkelmandjebutton.addEventListener("click", toevoegenaanwinkelmandje)){
        toevoegenaanwinkelmandje();
    }
}

//toevoegen aan de winkelmand
function toevoegenaanwinkelmandje(item){
    //itemsinwinkelmandje.push(item);   
    //console.log("allo telecom");
    //console.log(itemsinwinkelmandje[0]);
    itemsinwinkelmandje.push(item);
    return console.log(itemsinwinkelmandje);
}


//function toevoegenaanwinkelmandje(){
//    let arrayinput;
//    if(dotrood.style.border = "solid 2px black"){
//        console.log("bannaan");
//        arrayinput = bandjes[0];
//        itemsinwinkelmandje.push(arrayinput);
//    }
//    else if(dotgeel.style.border = "solid 2px black"){
//        console.log("wortel");
//        arrayinput = bandjes[0];
//        itemsinwinkelmandje.push(arrayinput);
//    }
//    else if(dotblauw.style.border = "solid 2px black"){
//        console.log("appel");
//        arrayinput = bandjes[0];
//        itemsinwinkelmandje.push(arrayinput);
//    }
//    else{
//        alert("Selecteer eerst een kleur.")
//    }
//}
//console.log(bandjes[0]);