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

// inbuild Call method
// introduce.call(obj1,'HCL')
// introduce.call(obj2,'TCS')


// polyfill of call method
Function.prototype.myCall = function(obj,...args){
    const referTo = this;
    obj.myFun = referTo
    obj.myFun(...args)
}

introduce.myCall(obj2,'TCS')

