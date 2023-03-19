const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Jawaban: '
});

fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  let quizData = JSON.parse(data);
  let skippedQuestions = [];

  console.log('Selamat datang di permainan Tebak Kata!');
  console.log('Silakan jawab pertanyaan berikut dengan benar.');

  let askQuestion = (questionIndex) => {
    console.log(`Pertanyaan: ${quizData[questionIndex].definition}`);
    rl.prompt();
  }

  let questionIndex = 0;
  let wrongAnswers = 0;
  let correctAnswers = 0;

  askQuestion(questionIndex);

  rl.on('line', (answer) => {
    if (answer.toLowerCase() === 'skip') {
      skippedQuestions.push(quizData[questionIndex]);
      questionIndex++;
      if (questionIndex < quizData.length) {
        askQuestion(questionIndex);
      }
    } else if (answer.toLowerCase() === quizData[questionIndex].term.toLowerCase()) {
      console.log('Anda Beruntung!');
      questionIndex++;
      correctAnswers++;
      if (questionIndex < quizData.length) {
        askQuestion(questionIndex);
      }
    } else {
      console.log(`Anda kurang beruntung! Anda telah salah ${++wrongAnswers} kali.`);
    }

    if (questionIndex >= quizData.length) {
      if (skippedQuestions.length > 0) {
        console.log('Pertanyaan yang terlewati:');
        skippedQuestions.forEach((question) => {
          console.log(`- ${question.definition}`);
          quizData.push(question);
        });
        fs.writeFile('data.json', JSON.stringify(quizData), (err) => {
          if (err) throw err;
          console.log('Pertanyaan yang terlewati telah ditambahkan ke data.json.');
        });
        skippedQuestions = [];
      }
      console.log(`Anda Berhasil !`);
      
    }
  });
});
