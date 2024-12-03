// javascript closure is a function that have access to the parent scope event after the parent function is close also we can achieve the data incapsulation through this machanism without poluting the global scope

// i want to achieve when first time i call then print 1 second time print 2 and third time it will print 3

// failed to implement
// const counter = () => {
//     let count = 0;
//     count++;
//     console.log(count)
// }

// counter()//1
// counter()//1
// counter()//1


// 2nd method but problemnt in this is that we polute the global scope so that the count variable is accessed throught out this file and we are not achieving data incapsulation.
// let count = 0;
// function count (){
//     count++;
//     console.log(count)
// }

// count()//1
// count()//2
// count()//3

// using closure without poluting global scope
function counter(){
    let count = 0;
    return () => {
        count++;
        console.log(count)
        return count
    }
}

const myCounter = counter()

myCounter()
myCounter()
myCounter()