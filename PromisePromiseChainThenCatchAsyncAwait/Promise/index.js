// promise is a piece of code which run not immidetly after some delay promise is either resolve of reject
// promise have three stage pending , fullfilled and reject

const result = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const number = Math.floor(Math.random()*10)
        if(number<5){
            reject(`number is less than 5 , number is ${number}`)
        }else{
            resolve(`number is greater than 5 , number is ${number}`)
        }
    },1000)
})

result.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error.message)
}).finally(()=>{
    console.log('finally block executed')
})