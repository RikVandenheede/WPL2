 function loggedIn(naam){
    if(sessionStorage.length !== 1){
        WelcomeName = naam.charAt(0).toUpperCase() + naam.substring(1);
        return document.getElementById("naam").innerHTML = WelcomeName;
    }
}
loggedIn(sessionStorage.getItem("showName"));