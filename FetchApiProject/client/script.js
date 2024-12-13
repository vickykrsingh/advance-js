const getJokesBtn = document.getElementById('get-jokes')
const addJokesBtn = document.getElementById('post-jokes')
const jokes = document.getElementById('jokes')
const jokeInput = document.getElementById('joke')
const jokeId = document.getElementById('id')


let myJokes = null;

const getJokes = async () => {
    try {
        const resp = await fetch('http://localhost:8000/jokes',{
            method:'GET'
        })
        const result = await resp.json()
        myJokes = result;
        const jokesList = myJokes.map((joke)=>{
            return `<p>${joke.name}</p>`
        }).join('')
        jokes.innerHTML = jokesList
    } catch (error) {
        myJokes = null;
    }
}

const addJoke = async () => {
    try {
        const resp = await fetch('http://localhost:8000/new-jokes',{
            method:'POST',
            body:JSON.stringify({id:jokeId.value,joke:jokeInput.value}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const result = await resp.json();
        myJokes = result;
        jokeInput.value = "";
        jokeId.value = "";
        const jokeList = myJokes.map((joke)=>{
            return `<p>${joke.name}</p>`
        }).join('')
        jokes.innerHTML = jokeList
    } catch (error) {
        console.log(error)
    }
}


getJokesBtn.addEventListener('click',getJokes)
addJokesBtn.addEventListener('click',addJoke)