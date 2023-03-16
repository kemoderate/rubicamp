const readline = require('readline');

function sentenceManipulation(word) {
  let vokal = ['a', 'i', 'u', 'e', 'o']
  let huruf = word.split(" ");
  let hasil = []
  for (let i = 0; i < huruf.length; i++) {
    if (huruf[i].charAt(0).toLowerCase() == vokal[0]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0).toLowerCase() == vokal[1]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0).toLowerCase() == vokal[2]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0).toLowerCase() == vokal[3]) {
      hasil.push(huruf[i])
    } else if (huruf[i].charAt(0).toLowerCase() == vokal[4]) {
      hasil.push(huruf[i])
    } else {
      let konsonan = huruf[i].substring(1) + huruf[i].charAt(0) + 'nyo'
      hasil.push(konsonan)
    }
  }
  console.log(hasil.join(" "));

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start() {
  rl.question("tulis kalimatmu disini: ", function (input) {
    if (input.toLowerCase() === 'exit') {
      console.log('Good Bye!')
      rl.close();
    } else {
    console.log("hasil konversi: "),sentenceManipulation(input);
      start();
    }
  });
}

start();
