"use strict";

((laatNaamZien, groet) =>{
    if(groet){
        let welcomeName = laatNaamZien.charAt(0).toUpperCase() + laatNaamZien.substring(1);
        return document.getElementById("naam").innerHTML = welcomeName;
    }
})(sessionStorage.getItem("showName"), (sessionStorage.getItem("groet")));