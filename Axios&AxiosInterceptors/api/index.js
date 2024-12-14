import express from 'express'
import cors from 'cors'

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

const app = express();

app.use(express.json())
app.use(cors({
    origin:'http://127.0.0.1:5500'
}))


app.get('/jokes',(req,res)=>{
    console.log('run')
    try {
        return res.json(jokes)
    } catch (error) {
        console.log(error)
    }
})

app.post('/new-joke',(req,res)=>{
    try {
        const {id,joke} = req.body;
        const isPresent = jokes.filter((joke)=>{
            if(joke.id==id){
                return joke
            }
        })
        if(isPresent.length>0){
            return res.json('please type another id')
        }
        jokes.push({id,name:joke});
        return res.json(jokes)
    } catch (error) {
        console.log(error)
    }
})


app.listen(8000,()=>{
    console.log('server is running on port 8000')
})