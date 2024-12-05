// Hoisting is javascript's default behaviour of moving declarations to the top. 
// why hoisting exists ? - because js has to allocate memory for variable 


// (let a;)
console.log(a) // undefined (but logically here we got error but it shows undefined just because the declaration of the variable move to the top of the file (let a;))
var a = 1;

// technically js modify above code like that
// let a;
// console.log(a);
// a = 1;



// with the function 
test(); // work well just because of hoisting because the declaration of test move to the top and javascript khows that test is already declared

function test(){
    console.log('hello world')
}

// technicallly js modify above code like that 
// function test(){
//      console.log('hello world');
// }
// test();


// NOTE : those variable made by var keyword , javascript allocate the memory in global object with the value of 'undefined' and global object can be accessed throught the file.

// NOTE : those variable made by let or const keyword , javascript also hoist this but not in global scope this type of variable is hoist in Script scope and it is called temporary deadzone and it is not accessable before initialization so that whenever i use these type of variable before declaration then we got the reference error instead of undefiend , it shows 'can't access before initialization' with reference error.

// NOTE : let and const are also hoist but we can't access let or const variable before initialization because javascript kept in seprate zone which is called deadzone


// 1st question

test() // this will show TypeError with message test is not a function because only test variable declaration is moved to the top and i'm trying to call a undefined variable which is not a function.

let test = function(){
    console.log('hello world')
}

// js modify the above code like that 
let test;
test();
test = function(){
    console.log('hello world')
}

// 2nd question
var x = 10;
function testValue(){
    console.log(x) // it shows undefined becuase var x = 20; will hoist inside the function and when he try to find x inside the function it will found the declaration only cause of hoisting with the value of undefined and it will print undefined.
    var x = 20;
}
testValue()

// js modify the above code like that
// var x;
// x = 10;
// function testValue(){
//      var x;
//      console.log(x);
//      x = 20;
// };
// testValue();


// 3rd question
function show(){
    if(false){
        var p = 20;
        console.log(p)
    }
    console.log(p) // logically it will throw referenceError that p is not defined but it will print the value of p 'undefined' because of hoisting because there is not matter the if block will execute or not because js hoist all variable or function . here p is made by var keyword so that it will hoist inside the function with the value of undefined so that console.log(p) which is after if block will executed and print the value of p which is undefined which is hoisted.
}
show()

// js modify above code like that
// function show(){
//     var p;
//     if(false){
//         p = 20;
//         console.log(p);
//     }
//     console.log(p)
// }
// show()



// 4th question
function show(){
    if(false){
        let p = 20;
        console.log(p)
    }
    console.log(p); // it will throw erro that p is not defined because the let p = 20; is hoisted but inside the if block and there is no reference of p outside of if block and we are consoling the p so that it will throw the referenceError that p is not defined.
}
show()

// js modify above code like that
// function show(){
//     if(false){
//         let p;
//         p = 20;
//         console.log(p);
//     }
//     console.log(p)
// }
// show()



// 5th question
var pname = 'name 1';
function print(){
    pname = 'name 2';
    if(1==2){
        var pname = 'name 3'
    }
}

print();
console.log(pname) // name 1

// js modify above code like that 
// var pname;
// pname = 'name 1';
// function print(){
//     var pname;
//     pname = 'name 2';
//     if(1==2){
//         pname = 'name 3';
//     }
// }

// print();
// console.log(pname) // name 1
