// Polyfill of map function
Array.prototype.myMap = function(cb){
    let myArr = this;
    let result = [];
    for(let i=0;i<myArr.length;i++){
        result.push(cb(myArr[i],i,result))
    }
    return result
}

const arr = [12,33,13,432,32];


const res = arr.myMap((item,i,res)=>{
    return item*2
})

console.log(res)