const Calculate = {
    value : 0,
    add : function(a){
        this.value = this.value+a;
        return this;
    },
    substract : function(b){
        this.value = this.value-b;
        return this
    },
    multiply : function(c){
        this.value = this.value*c;
        return this
    },
    getValue : function(d){
        return this.value
    }
}

const res = Calculate.add(40).substract(2).multiply(3).add(10).getValue()
console.log(res)


class Calculator {
    constructor(){
        this.value=0;
    }
    add(val){
        this.value=this.value+val;
        return this;
    }
    substract(val){
        this.value = this.value-val;
        return this;
    }
    multiply(val){
        this.value = this.value*val;
        return this
    }
    getValue(){
        return this.value;
    }
}

const calc = new Calculator();
const result = calc.add(23).add(234).substract(100).multiply(12).getValue()
console.log(result)