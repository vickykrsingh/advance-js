const users = [
    {
        id:1,
        name:'vicky'
    },{
        id:2,
        name:'vipul'
    },{
        id:3,
        name:'mishra'
    }
]
const courses = [
    {
        userid:1,
        courseName:'react',
        duration:'200min',
        price:500
    },
    {
        userid:2,
        courseName:'next',
        duration:'150min',
        price:400
    },
    {
        userid:1,
        courseName:'html',
        duration:'300min',
        price:700
    },
    {
        userid:3,
        courseName:'css',
        duration:'225min',
        price:230
    },
    {
        userid:1,
        courseName:'javascript',
        duration:'350min',
        price:400
    },
    {
        userid:3,
        courseName:'typescript',
        duration:'100min',
        price:300
    }
]
const getUserDetail = (id) => {
    const promise = new Promise((res,rej)=>{
        setTimeout(() => {
            const result = users.filter((user)=>{
                if(user.id==id){
                    return user
                }
            })
            if(result){
                res(result)
            }else{
                rej('user not found')
            }
        }, 1000);
    })
    return promise
}

const getUserCourses = (id) => {
    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            const result = courses.filter((course)=>{
                if(course.userid==id){
                    return course
                }
            })
            if(result){
                res(result)
            }else{
                rej('course not found')
            }
            console.log(result)
        },1000)
    })
    return promise
}

getUserDetail(3)
.then((data)=>{
    return getUserCourses(data[0].id)
})
.then((newData)=>{
    console.log(newData)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('finally block executed')
})