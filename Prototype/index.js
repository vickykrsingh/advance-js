Array.prototype.sum = function(){
    return this.reduce((curVal,acc)=>acc+curVal,0)
}


const myArr = [23,43,53,23,43,2,343,2,4,34,23];
const res = myArr.sum();
// console.log(res)


Function.prototype.randomNumber = function (start, end) {
    if (typeof start !== "number" || typeof end !== "number" || start >= end) {
        throw new Error("Please provide valid start and end numbers where start < end.");
    }
    return Math.floor(Math.random() * (end - start + 1)) + start;
};


function Add(){
    return 'hello world'
}
const randNo = Add.randomNumber(3,5);
// console.log(randNo)


Date.prototype.getPreviousYear = function(){
    return this.getFullYear()-1;
};

const todayData = new Date();
console.log(todayData.getPreviousYear())


class Animal {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

Animal.prototype.introduce = function(){
    return `hey i'm ${this.name} and i'm ${this.age} and gender is ${this.gender}`
}

const dog = new Animal('mishra',26,'female')
const cate = new Animal('sdlkfds',24,'ksdjf')
console.log(dog.introduce())
console.log(cate.introduce())