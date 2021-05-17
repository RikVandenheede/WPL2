let dotrood = document.getElementById("dotrood");
let dotgeel = document.getElementById("dotgeel");
let dotblauw = document.getElementById("dotblauw");
let imgbandje = document.getElementById("imgbandje");

let bandjes = [
    {kleur:'Rood', prijs:'69,99'},
    {kleur:'Geel', prijs:'69,99'},
    {kleur:'Blauw', prijs:'69,99'}
];

dotrood.addEventListener("click", clickondotrood);
dotgeel.addEventListener("click", clickondotgeel);
dotblauw.addEventListener("click", clickondotblauw);

function clickondotrood(){
    dotrood.style.border = "solid 2px black";
    dotgeel.style.border = "none";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandRoodPingGroen.png";
}
function clickondotgeel(){
    dotrood.style.border = "none";
    dotgeel.style.border = "solid 2px black";
    dotblauw.style.border = "none"; 
    imgbandje.src = "./images/BandGeelPingGroen.png";
}
function clickondotblauw(){
    dotrood.style.border = "none";
    dotgeel.style.border = "none";
    dotblauw.style.border = "solid 2px black"; 
    imgbandje.src = "./images/BnadTurqPingGroen.png";
}