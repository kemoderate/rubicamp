function weirdMultiply(sentence) {
    let angka = sentence.toString()
    let pisah = sentence.split("");
    let hasil = 1;
    if (angka === 1 ) {
        return angka;
    }else {
    for (i = 0; i < angka.length; i++) 
        hasil *= angka[i];
    }
    return weirdMultiply(hasil);    
}





console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));