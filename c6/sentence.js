
function sentenceManipulation(word) {
  let vokal = ['a','i','u','e','o']
  let huruf = word.split(" ");
  let hasil = [] 
  for (let i = 0; i < huruf.length; i++) {
    if (huruf[i].charAt(0) == vokal[0]) {
      hasil.push(huruf[i])
    }else if (huruf[i].charAt(0) == vokal[1]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0) == vokal[2]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0) == vokal[3]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0) == vokal[4]) {
      hasil.push(huruf[i])
    } else {
      let konsonan =  huruf[i].substring(1) + huruf[i].charAt(0) + 'nyo'
      hasil.push(konsonan) 
      }
    }
    console.log(hasil.join(" "));

  }
    sentenceManipulation('ibu pergi ke pasar bersama aku')