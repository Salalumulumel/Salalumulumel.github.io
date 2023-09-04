let siffra = 0;

/*

var variabel = "bryter block"
let variabel = "nyare = block variabel"

*/ 


function PlusClick(){
    siffra = siffra + 1;
    console.log(`siffra = ${siffra}`);
    document.getElementById("svar").innerHTML = siffra;
}


//minus knapp

const minusknapp = document.getElementById("minus");
minusknapp.addEventListener("click", MinusClick)
//ingen parantes = adress till funktion


function MinusClick(){
    siffra--
    console.log(`Siffra = ${siffra}`)
    document.getElementById("svar").innerHTML = siffra;
}


/*console.log("funkar!" + ett)
console.log(`funkar 2! ${ett}`)*/