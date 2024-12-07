// infinite currying
function add(a){
    return function(b){
        if(b) return add(a+b);
        else return a;
    }
}

const res = add(2)(4)(5)()
console.log(res)

// add(2) -> function(4) -> add(6) -> function(11) -> 11


// deep clone



const obj = {
    name:'vicky',
    age:22,
    gender:'male',
    sub:[12,32,432,132],
    marks:{
        c:80,
        java:90
    },
    createdAt:new Date(),
    status:undefined
}

// simple copy
// const obj2 = obj; // here problem is that when ever i modified obj2 it will automatically modify obj1 but i want only obj2 will modify
// obj2.name='vikash'
// console.log(obj)
// console.log(obj2)

// shallow copy 
const obj2 = {...obj};
obj2.marks.c=100 // it will again modigy the c in both obj2 and obj object for that also we spread out marks object also and if inside marks also there is any key with the value of object then again we spread out and so on.
// console.log(obj2)
// console.log(obj)

// deep copy when there is no any undefined or date type value present in this
// so there is another way to do the same thing but it have some drawbacks 
let obj3 = JSON.parse(JSON.stringify(obj)); // there is drawback is that when any key have value Date type it will convernt it into string and any key having undefined it will remove it etc.
// console.log(obj3)

// deep clone method with no any drawbacks
// so the best way to do is create own function to deep clone 


function deepClone(obj){
    let copyObj = {};
    for(let key in obj){
        let value = obj[key];
        if(value instanceof Date){ // Date is also type of object so that it is handled by this manner
            copyObj[key] = new Date(value.getTime())
        }
        else if(typeof value !== 'object'){
            copyObj[key]=obj[key];
        }else{
            copyObj[key] = deepClone(value)
        }
    }
    return copyObj;
}

const objNew = deepClone(obj);
console.log(objNew)