const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tebakan: '
});

fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  const quizData = JSON.parse(data);

  let questionIndex = 0;
  let correctAnswers = 0;

  console.log(' Selamat datang di permainan Tebak Kata ');
  console.log('Silakan jawab pertanyaan berikut dengan benar');

  console.log(`Pertanyaan: ${quizData[questionIndex].definition}`);
  rl.prompt();

  rl.on('line', (answer) => {
    if (answer.toLowerCase() === quizData[questionIndex].term.toLowerCase()) {
      console.log('Selamat, Anda benar!');
      correctAnswers++;
      questionIndex++;
    } else {
      console.log('Wkwkwk, Anda kurang beruntung!');
    }
    
    if (questionIndex < quizData.length) {
      console.log(`Pertanyaan: ${quizData[questionIndex].definition}`);
      rl.prompt();
    } else {
      console.log(`hore anda menang!`);
      rl.close();
    }
  });
});
