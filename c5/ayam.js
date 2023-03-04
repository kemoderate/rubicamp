function stringmanipulation(word) {
    let variasi = word.charAt(0)
    let huruf = word[0]
         
    switch (huruf) {
        case "a":
        case "i" :
        case "u" :
        case "e" :
        case "o" :
            console.log(word);
            break;
        default:
           console.log((word.substr(1) + variasi + 'nyo'))
            break;
    }

}

stringmanipulation('ayam');
stringmanipulation('bebek');
