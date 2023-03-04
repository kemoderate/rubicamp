function stringmanipulation(word) {
    let variasi = word.charAt(0)
    let hasil = ""     
    switch (hasil) {
        case "a":
            console.log(word);
        case "i" :
            console.log(word);
        case "u" :
            console.log(word);
        case "e" :
            console.log(word);
        case "o" :
            console.log(word);
        default:
           console.log((word.substr(1) + variasi + 'nyo'))
            break;
    }

}

stringmanipulation('ayam');
stringmanipulation('bebek');
