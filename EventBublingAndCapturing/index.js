const div = document.getElementById('div')
const btn = document.getElementById('btn')


// in third parameter of addEventListner i can define what i want bubbling or capturing, by default it will false so that it travel bottom to top(bubling) that means first inner content event listner will run then outer content event listner will run.

// event bubling
div.addEventListener('click',()=>{
    console.log('div clicked') // 2nd run
})

btn.addEventListener('click',(event)=>{
    console.log('btn clicked') // 1st run
})

// in this the event trigered from top to bottom means first outer content event listner will run then after inner content event listner will run

// event capturing
div.addEventListener('click',()=>{
    console.log('div clicked') // 1st run
},true)
btn.addEventListener('click',()=>{
    console.log('btn clicked') // 2nd run
},true)

// stopPropgation() is the method to restrict the bubble out of event means we can define it after some event then another event doesn't triggered

div.addEventListener('click',(e)=>{
    console.log('div clicked') // 1st run
    e.stopPropagation()
},true)
btn.addEventListener('click',()=>{
    console.log('btn clicked') // it will not run 
},true)


div.addEventListener('click',(e)=>{
    console.log('div clicked') // it will not run
    e.stopPropagation()
})
btn.addEventListener('click',()=>{
    console.log('btn clicked') // 1st run
})


// when we define two or more event listner in same level and i want that only one event listner will run when it will clicked then we should use stopImmidiatePropgation()

div.addEventListener('click',()=>{
    console.log('div clicked') // this will also not run
})
btn.addEventListener('click',(e)=>{
    console.log('btn clicked 1') // 1st run
    e.stopImmediatePropagation() // this will restrict to run btn click 2
})
btn.addEventListener('click',()=>{
    console.log('btn click 2') // this will not run because of line 53
})