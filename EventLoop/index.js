function A(){
    console.log('A')
}
function B(){
    console.log('B')
}
function C(){
    console.log('C')
}
function D(){
    console.log('D')
}

A() // 1st run 
setTimeout(B, 0); // macro task 4th run
Promise.resolve().then(C) // micro task 3rd run
D() // 2nd run