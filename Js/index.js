if(sessionStorage.length !== 1){
    loggedIn(sessionStorage.getItem("showName"));
}
function loggedIn(naam){
    document.getElementById("naam").innerHTML = naam;
}