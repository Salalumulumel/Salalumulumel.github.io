class Gato{

    constructor(brand,color,bid){
        this.brand = brand
        this.color = color
        this.bid = bid
    }
}

let gatolist = [];


//-----------------------------------------
// addButtonClick()

function addbuttonClick(){

    //console.log(`Type:${brand.value} Color:${color.value}`)
    const now = Date.now();
    const id = now.toString();
    let brandname = brand.value

    if (brandname != ""){
        //lägg till gato!!!!!!!!
        let cat = new Gato(brand.value, color.value, id)
        gatolist.push(cat)

        localStorage.setItem("the catlist", JSON.stringify(gatolist))
        brand.value=""
        color.value=""

        list_gato_div.innerHTML=" ";

        gatolist.forEach(createHTMLgatolist)
    }

    else 
        alert("Have to fill in gato type!1!!!1!")
    brand.focus()
    
}


const addbutton = document.getElementById("addbutton")
addbutton.addEventListener("click", addbuttonClick)
const brand = document.getElementById("brand")
const color = document.getElementById("color")
const list_gato_div = document.getElementById("elgatolist_div")

//-----------------------------------------
// createHTMLgatolist() som arrowfunction

const createHTMLgatolist = (cat) => {
    //create element

    const gatodiv = document.createElement('div')
    gatodiv.className = "gato_div_element"

    const gatoh2 = document.createElement('h3')
    const gatoPcolor = document.createElement('p')
    const gatoDelButton = document.createElement('button')

    gatoh2.innerText = `Type: ${cat.brand}`
    gatoPcolor.innerText = `Color: ${cat.color}`
    gatoDelButton.innerText = "Delete"
    gatoDelButton.id = cat.bid

    gatodiv.append(gatoh2, gatoPcolor, gatoDelButton)
    list_gato_div.appendChild(gatodiv)
}