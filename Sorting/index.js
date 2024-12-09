const arr1 = [12,32,43,13,43,5,2,9]
const arr2 = ['vicky','vipul','êvil','aryaman','piyush']

// arr1.sort();
// console.log(arr1) // [12, 13, 2, 32, 43, 43, 5,  9] -- not working properly with numeric value 

// arr2.sort()
// console.log(arr2) // [ 'aryaman', 'piyush', 'vicky', 'vipul', 'êvil' ] -- not working properly with string when it found some special letter or any other language letter


// fixed is that to use compare function
// arr1.sort((a,b) => console.log(a,b)); 
// 32 12
// 43 32
// 13 43
// 43 13
// 5 43
// 2 5
// 9 2


arr1.sort((a,b)=>a-b)
console.log(arr1)


        //or

// arr1.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// })
// console.log(arr1) ----  [
//    2,  5,  9, 12,
//    13, 32, 43, 43
//  ]



arr2.sort((a,b)=>a.localeCompare(b));
console.log(arr2) // [ 'aryaman', 'êvil', 'piyush', 'vicky', 'vipul' ]


const arr3 = ['vicky','vipul','aryaman'];
arr3.sort((a,b)=>a.localeCompare(b));
console.log(arr3) // [ 'aryaman', 'êvil', 'piyush', 'vicky', 'vipul' ]