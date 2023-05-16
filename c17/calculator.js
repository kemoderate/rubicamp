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
square(){  
    this.resultValue = this.resultValue ** 2;
    return this;
}
exponent(value){
    this.resultValue = this.resultValue ** value; 
    return this;
}
squareRoot(){
    this.resultValue = Math.sqrt(this.resultValue);
    return this;
}

// tambahkan method lain yang perlu
result(){
console.log(this.resultValue)
return this;
}
}

export {Calculator, PI}