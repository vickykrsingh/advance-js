const obj1 = {
    a:12,
    b:'vicky',
    c:{name:'vikash'},
    d:new Date('2002-05-05'),
    e:[23,43,23,43],
}
const obj2 = {
    a:12,
    b:'vicky',
    c:{name:'vikash'},
    d:new Date('2002-05-05'),
    e:[23,43,23,43],
}

function deepCompare(obj1,obj2){
    if(typeof(obj1)!=='object' && typeof(obj2)!=='object'){
        return false
    }
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2)

    if(key1.length!==key2.length){
        return false
    }

    for (let k of key1) {
        if(!obj2.hasOwnProperty(k)){
            return false
        }
        const val1 = obj1[k];
        const val2 = obj2[k];

        if(val1 instanceof Date && val2 instanceof Date){
            if(val1.getTime()!==val2.getTime()){
                return false
            }
        }
        else if(typeof(val1)==='object' && typeof(val2) === 'object'){
            if(!deepCompare(val1,val2)){
                return false
            }
        }
        else if(val1!==val2){
            return false
        }
    }
    return true
}


console.log(deepCompare(obj1,obj2))