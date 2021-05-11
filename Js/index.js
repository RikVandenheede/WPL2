 function loggedIn(naam){
    if(sessionStorage.length !== 1){
        let welcomeName = naam.charAt(0).toUpperCase() + naam.substring(1);
        document.getElementById("naam").innerHTML = welcomeName;
    }
}
loggedIn(sessionStorage.getItem("showName"));