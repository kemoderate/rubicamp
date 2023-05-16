const PI = 22 / 7
class Calculator {
    constructor() {
        this.resultValue = 1;

}

add(value) {
    this.resultValue += value;
    return this;

}
multiply(value){
    this.resultValue *= value;
    return this;
}
substract(value){
    this.resultValue -= value;
    return this;
}
divide(value){
    this.resultValue /= value;
    return this;
}
square(value){  
    this.resultValue = Math.pow(value,2);
    return this;
}
exponent(value){
    this.resultValue = Math.pow(this.resultValue,value);
    return this;
}
squareRoot(value){
    this.resultValue = Math.sqrt(value);
    return this;
}

// tambahkan method lain yang perlu
result(){
return this.resultValue;
}
}

const calc = new Calculator
export {Calculator, PI}