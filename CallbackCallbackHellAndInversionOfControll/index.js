// callback
function apiDataFetch(cb){
    setTimeout(()=>{
        return cb({name:'vicky',gender:'male'})
    },7000)
}

// apiDataFetch((data)=>{
//     console.log(data)
// });


// callback hell 
function apiDataFetch2(cb,data){
    setTimeout(()=>{
        return cb(data)
    },1000)
}
function apiDataFetch3(cb,data){
    setTimeout(() => {
        return cb({gender:'male',...data})
    },1000);
}
function apiDataFetch4(cb,data){
    setTimeout(() => {
        return cb({age:23,...data})
    }, 1000);
}
// callback hell
apiDataFetch2((data1)=>{
    apiDataFetch3((data2)=>{
        apiDataFetch4((data3)=>{
            console.log(data3)
        },data2)
    },data1)
},{name:'vicky'})

// IOC (inversion of controll) post function is dependent on userDetail function if userDetail function call the callback function properly then only post will run so that we lost the controll from post function and userDetail function hold the controll of the post function so we lost the controll from the post function this is called inversion of controll
function userDetail(cb){
    setTimeout(() => {
        return cb({userId:23})
    }, 1000);
}
function posts(cb,userId){
    if(!userId){
        throw new Error('invalid user id')
    }
    setTimeout(()=>{
        return cb({post1:'it',post2:'forest',userId})
    },1000)
}

const postsData = userDetail(({userId})=>{
    posts((post)=>{
        console.log(post)
    },userId)
})