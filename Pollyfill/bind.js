const obj1 = {
    name:'vicky',
    age:23,
    salary:'5lpa'
}
const obj2 = {
    name:'vipul',
    age:25,
    salary:'10lpa'
}

function introduce(...args){
    const argument = args;
    console.log(`Hello my name is ${this.name} , my age is ${this.age} and i recieved ${this.salary} stipened and i worked in ${argument[0]}`)
}

// inbuild bind method
const introduceObj1 = introduce.bind(obj1,'Google')
introduceObj1()
const introduceObj2 = introduce.bind(obj2,'Microsoft')
introduceObj2()

// pollyfill of bind method
Function.prototype.myBind = function(obj,...args){
    const func = this;
    obj.myFun = func;
    return function(){
        obj.myFun(...args)
    }
}

const introduceCustomObj1 = introduce.bind(obj1,'Google')
introduceCustomObj1()
const introduceCustomObj2 = introduce.bind(obj2,'Microsoft')
introduceCustomObj2()