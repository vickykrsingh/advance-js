// arrow function introduced in es6 which helps you to reduce the line of code to write a function as compare to normal function.

// using normal function
function add(a,b){
    return a+b;
}

// using arrow function
const addArrow = (a,b) => a+b;

// calling both function
const result1 = add(3,4);
const result2 = addArrow(4,5);

console.log(result1)
console.log(result2)

// difference between normal function and arrow function

// 1 
// arrow function does not support argument keyword

// using normal function 
function testArgs(){
    const args = arguments;
    console.log(args)
}

testArgs(3,4,5,2,3); // [Arguments] { '0': 3, '1': 4, '2': 5, '3': 2, '4': 3 }



// using arrow function 
const testArgsArrow = () => {
    const [a,b,c,d,e,f] = arguments;
    console.log(a,b,c,d,e,f) // ReferenceError : argument is not defined 
}

testArgsArrow(3,2,4,2,4)


// 2
// arrow function can't be use as constructor 
// before es6 there is no class keyword so we can use function keyword to create class and its constructor

// using normal function
function Person(name,age){
    this.name=name;
    this.age=age;
}

const p1 = new Person('vicky',23)
console.log(p1) // Person { name: 'vicky', age: 23 }

// can't be used using arrow function because new keyword can't used with arrow function
const PersonArrow = (name,age) => {
    this.name=name;
    this.age=age;
}

// const p2 = new PersonArrow('vikash',34); // TypeError: PersonArrow is not a constructor (because of new keyword )
// console.log(p2)

// 3 
// this keyword doesn't works well with arrow function

// using normal function (sayHello) this is refered to obj1 which is correct behavious 
const obj1 = {
    name:'vicky',
    age:22,
    gender:'male',
    sayHello:function(){
        console.log(this);
        // {
        //     name: 'vicky',
        //     age: 22,
        //     gender: 'male',
        //     sayHello: [Function: sayHello]
        //   }
        console.log('hey there')
        // hey there
    }
}

obj1.sayHello()

const obj2 = {
    name:'vicky',
    age:22,
    gender:'male',
    sayHello:()=>{
        console.log(this);
        console.log('hey there')
    }
}

obj2.sayHello() // it refered to window object (global object/default it points to window) or it refered nearest non arrow parent function otherwise it refered to window

const obj3 = {
    name:'vivek',
    age:24,
    sayHello:function(){
        const greet = () => {
            console.log(this);
            console.log('hey there')
        }
        greet() // here this refered to the object because it found the nearest not arrow parent function { name: 'vivek', age: 24, sayHello: [Function: sayHello] }
    }
}

obj3.sayHello()