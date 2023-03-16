const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'tulis kalimatmu disini > '
});


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
  console.log(`Hasil Konversi: ${hasil.join(" ")}`);
  rl.prompt('tulis kalimatmu disini > ')
}
rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Good bye!')
    rl.close()
  } else {
    sentenceManipulation(input.toLowerCase())
  }
})
rl.prompt();
