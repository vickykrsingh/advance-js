// Polyfill of filter function
Array.prototype.myFilter = function(cb){
    let myArr = this;
    let result = [];
    for(let i = 0;i<myArr.length;i++){
        if(cb(myArr[i])){
            result.push(myArr[i],i,result)
        }
    }
    return result
}
const arr = [12,33,13,432,32];


const res = arr.myFilter((item,i,arr)=>{
    return item%2==0
})

console.log(res)