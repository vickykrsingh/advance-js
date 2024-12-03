function add (a){
    return function add(b){
        return function add(c){
            return function add(d){
                const result = a+b+c+d;
                console.log(result)
            }
        }
    }
}

add(12)(10)(30)(50)


// Using arrow function

const addWithArrow = a => b => c => a+b+c;

console.log(addWithArrow(3)(5)(9))


// example 

function DressPrice(price){
    return function(discountPer){
        return price - (price * discountPer/ 100)
    }
}

const calcAmount = DressPrice(100);


// custumer 1
console.log(calcAmount(20))