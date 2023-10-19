const antal_vinster = document.getElementById("antal_vinster");
const svardiv = document.getElementById("svardiv");

const vinster =
    ["En halv legobit", 
    "En hårboll från Bombon", 
    "Joels nudes", 
    "Kristers Schizofreni-medicin",
    "Ett halvt kilo hö", 
    "14 Barn från Bosnien", 
    "En cigarettfimp", 
    "4 Bögar och en pall", 
    "Den 13e anledningen",
    "Samuels borttappade bollar", 
    "Tre antidepprissiva tabletter", 
    "Freddy Fazbear har har har har har", 
    "5 Kameler",
    "Fortnite battlepass", 
    "Crazy? I was crazy once, they locked me in a room. A rubber room. A rubber room with rats, and rats make me crazy... CRAZY?!", 
    "Presentkort på vuxen.se", 
    "En blöt puss i pannan", 
    "En guldstjärna", 
    "Roadtrip till omvändelseterapi"]


function buttonClick(){
    let vinst = `<h3>Dina Vinster</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    /*console.log(`funkar e ${antalv}`);*/

       
    for (i=0; i<int_antalv; i++){
        let slumptal = Math.floor(Math.random() * 19)
        let t_vinst = vinster[slumptal];
        vinst += `<p>${t_vinst}</p>`
     }

    svardiv.innerHTML = vinst;

}