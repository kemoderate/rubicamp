const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan: '
});
let soal = [];

function load(soal) {
    const data = fs.readFileSync('data.json');
    soal = JSON.parse(data);
}

function save(jawaban) {
    const data = {
        pertanyaan: soal.pertanyaan,
        jawaban: jawaban
    };
    const jsonData = JSON.stringify(data,2);
    fs.appendFileSync('data.json', jsonData);
}


rl.on('line', (input) => {
    if (input === 'exit') {
        console.log('Hore Anda Menang!')
        rl.close()
    } else {

    }
})
load();
rl.prompt();


