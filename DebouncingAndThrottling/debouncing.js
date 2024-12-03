// decouncing and throttling are the techniques used in web development to controll the rate at which certain functions or actions are executed in response to events like user input or browser events

const categoryInput = document.getElementById('inputCategory')
// console.log(categoryInput)

// --------------------------Basic implementation of debouncing ------------------------------


// function debounce (func,delay) {
//     let timeout;
//     return function(){
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(()=>func(),delay)
//     }
// }

// function apiCallingFunction(){
//     console.log('calling api')
// }

// const debouncedApiCallingFunction = debounce(apiCallingFunction,1000)

// categoryInput.addEventListener('input',debouncedApiCallingFunction)


// when we want to pass some argument in apiCallingFunction


// USING ...args 

// function debounce(func,delay){
//     let timeout;
//     return function(...args){
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         let arg = args;
//         timeout = setTimeout(()=>func(...arg),delay)
//     }
// }

// function callingApiFunction(a,b,c){
//     console.log('calling api function',a,b,c)
// }

// const debouncedFunction = debounce(callingApiFunction,1000)

// categoryInput.addEventListener('input',function(e){
//     debouncedFunction(1,2,3)
// })


// USING argument and apply method keyword

function debounce(func,delay){
    let timeoutId;
    return function(){
        let args = arguments;
        const ctx = this;
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(()=>func.apply(ctx,args),delay)
    }
}

const debouncedApiFunction = debounce(callingApi,1000);

function callingApi(term){
    console.log('hello world for term',term)
}

categoryInput.addEventListener('input',function(e){
    debouncedApiFunction(e.target.value)
})