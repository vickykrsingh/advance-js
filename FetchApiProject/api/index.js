const jokes = [
    {
        name:'joke1',
        id:1
    },
    {
        name:'joke2',
        id:2
    },
    {
        name:'joke3',
        id:3
    },
    {
        name:'joke4',
        id:4
    },
    {
        name:'joke5',
        id:5
    },
    {
        name:'joke6',
        id:6
    },
]
// import http from 'http'
// const server = http.createServer();
// server.get('/',(req,res)=>{
//     res.send('hello')
// })
// server.listen(8000,()=>console.log('server is listen on port 8000'))

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    origin:'http://127.0.0.1:5500'
}))
app.use(express.json())
app.get('/jokes',(req,res)=>{
    res.json(jokes)
})

app.post('/new-jokes',(req,res)=>{
    const {id,joke} = req.body;
    const isPresent = jokes.filter((joke)=>{
        if(joke.id==id){
            return joke
        }
    })
    if(isPresent.length>0){
        return res.json("please enter another id")
    }
    jokes.push({name:joke,id})
    res.json(jokes)
})

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})

// frontend

// fetch('http://localhost:8000/new-jokes',{
//     body:JSON.stringify({id:1,name:'hello jokes1'}),
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     }
// })


