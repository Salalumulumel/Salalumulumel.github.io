//definierar klass



class JokehandlerRequest {
    //skapar constructor som startas när man skapar ett objekt av klassen

    constructor(adress) {
        this.adress = adress;

    }

    //skapar en metod som de heter när man gör klasser, annars heter dem funktion
    async getJoke(){

        let joke_string = "This isn't a joke >:("

        await fetch(
            this.adress,
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                //console.log(`response= ${response.joke}`)
                joke_string = response.joke;

            })
            .catch(error => { console.log(error); joke_string += error });

    return joke_string

    }

}
const jokebutton = document.getElementById("jokebutton")

jokebutton.addEventListener("click", getJoke)

const p_joke = document.getElementById("pjoke")


//här är en funktion
async function getJoke(e){
    //console.log(`button press ${e.target.id}`)

    const t_adress = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist,explicit&type=single`

    let joke_object = new JokehandlerRequest(t_adress)
    p_joke.innerHTML = await joke_object.getJoke()

}