
const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke);

const p_joke = document.getElementById("pjoke")

function getJoke(e){
    /*alert("Skämtare där!") 
    */

    fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist,explicit&type=single`,
    {
        method:"GET",
        
        headers: new Headers({
            Accept: "application/json"}) 
    }
    )
    .then(res => res.json())
    .then(response => {
        let joke = response.joke
        p_joke.innerHTML = joke
    })
    .catch(error => console.log(error))


}