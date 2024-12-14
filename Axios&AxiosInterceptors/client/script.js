const getBtn = document.getElementById('getJoke')
const postBtn = document.getElementById('postJoke')
const idInput = document.getElementById('id')
const jokeInput = document.getElementById('joke')
const jokeList = document.getElementById('jokeList')

const axiosInstance = axios.create({
    baseURL:'http://localhost:8000',
    timeout:1000,
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer token'
    }
})

function updateJokes(jokes){
    const jokeListData = jokes.map((joke)=>{
        return `<p>${joke.name}</p>`
    }).join('')
    jokeList.innerHTML = jokeListData;
}

axiosInstance.interceptors.request.use(function(config){
    console.log(config)
    return config
},function(error){
    console.log(error)
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function(response){
    console.log(response)
    return response
},function(error){
    console.log(error)
    return Promise.reject(error)
})

async function getJokeMethod(){
    const response = await axiosInstance.get('/jokes');
    console.log(response)
    const result = response.data;
    updateJokes(result)
}

async function postJokeMethod(){
    const response = await axiosInstance.post('/new-joke',{id:idInput.value,joke:jokeInput.value});
    console.log(response)
    const result = response.data
    updateJokes(result)
}



getBtn.addEventListener('click',getJokeMethod)
postBtn.addEventListener('click',postJokeMethod)