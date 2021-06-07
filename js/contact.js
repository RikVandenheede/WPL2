let button = document.getElementById("button-contact");
let mailinput = document.getElementById("mail-contact");
let achternaamInput = document.getElementById("achternaam-contact");
let voornaamInput = document.getElementById("voornaam-contact");
let beschrijvingInput = document.getElementById("beschrijving-contact");
let validationFields = document.getElementsByClassName("validation-124");

let validation = [voornaamInput, achternaamInput, beschrijvingInput];

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener("click",  () => {
    let teller = 0;

    if (!validateEmail(mailinput.value)) {            
        mailinput.style.cssText = "border: 1px solid red;";
    }else{
        teller++;
        mailinput.style.cssText = "border: 1px solid #ced4da;";
    }

    for(let i = 0; i < validationFields.length; i++){
        if(validation[i].value === ""){
            validationFields[i].style.cssText = "border: 1px solid red;";
        }else{
            validationFields[i].style.cssText = "border: 1px solid #ced4da;";
            teller++;
        }
    }
    
    if(teller === 4){
        window.open('mailto:rik.vandenheede0@hotmail.com');
    }
});
