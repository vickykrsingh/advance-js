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

//inbuild Apply method
introduce.apply(obj1,['Wipro'])
introduce.apply(obj2,['Infosys'])


//pollyfill of apply method
Function.prototype.myApply = function(obj,args){
    const func = this;
    obj.myFun = func
    obj.myFun(...args)
}
introduce.myApply(obj1,['Google'])
introduce.myApply(obj2,['Microsoft'])