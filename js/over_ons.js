((laatNaamZien, groet) =>{
    if(sessionStorage.length !== 1 && !groet){
        WelcomeName = laatNaamZien.charAt(0).toUpperCase() + laatNaamZien.substring(1);
        return document.getElementById("naam").innerHTML = WelcomeName;
    }
})(sessionStorage.getItem("showName"), (sessionStorage.getItem("groet")));