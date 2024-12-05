const person1 = {
    name:'ramesh',
    age:22
}

const person2 = {
    name:'suresh',
    age:23
}

function introduce(){
    console.log(`hello my name is ${this.name} and i'm ${this.age} year old`)
}

function introduceWithArgument(salary,status){
    console.log(`hello my name is ${this.name} and my salary is ${salary} and i'm ${status}`)
}

// call method
introduce.call(person1) // call method is used to call a function for different object
introduceWithArgument.call(person2,2000,'coder') // all arguments or parameter is placed after specifying which one is calling this function 

// apply method
introduceWithArgument.apply(person1,[5000,'married']) // apply method is same as call method but only difference is that it will take arguments of the function as an array.

// bind method
const introduceWithBind = introduceWithArgument.bind(person1,8000,'unmarried'); // call and apply method call the function immidiately but bind method not call the function immmidiately , it will retrun the function for the specified object.
introduceWithBind()