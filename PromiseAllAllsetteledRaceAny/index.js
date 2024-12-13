function fun1(id){
    const result = new Promise((res,rej)=>{
        setTimeout(() => {
            if(id){
                res('promise is resolved for id')
            }else{
                rej('promise is reject for id')
            }
        }, 1000);
    })
    return result
}

function fun2(postId){
    const post = new Promise((res,rej) => {
        setTimeout(()=>{
            if(postId){
                res('promise is resolved for postid')
            }else{
                rej('promise is reject for postid')
            }
        },2000)
    })
    return post
}

const getData = async () => {
    try {
        const data = await Promise.all([fun1(1),fun2(3)]) // [ 'promise is resolved for id', 'promise is resolved for postid' ] if both parameter is pased
        console.log(data)
        return data;
    } catch (error) {
        console.log(error) // promise is reject for postid if any parameter have no value passed
    }
}


const getDataAllSettled = async () => {
    const data = await Promise.allSettled([fun1(),fun2(4)]);
    console.log(data) 
    // [
    //     { status: 'rejected', reason: 'promise is reject for id' },
    //     { status: 'fulfilled', value: 'promise is resolved for postid' }
    // ]
}

const getDataRace = async () => {
    try {
        const data = await Promise.race([fun1(null),fun2(8)])
        console.log(data) // promise is resolved for postid 
    } catch (error) {
        console.log(error)
    }
}

const getDataAny = async () => {
    const data = await Promise.any([fun1(),fun2(5)])
    console.log(data) // promise is resolved for postid
}

getData()


// Note : - 
// race - will return first promise wheather it resolved or rejected
// any - will return first promise only when its will resolved