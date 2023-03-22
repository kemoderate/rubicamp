const readline = require ('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : '<command> '
})
rl.prompt();
rl.on('line', (line) => {
    switch (line.trim()) {
      case 'list':
        console.log('list');
        console.log('task');
        console.log('add');
        console.log('delete');
        console.log('complete');
        console.log('uncomplete');
        console.log('world!');
        break;
      default:
        console.log(`<command>`);
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });
  