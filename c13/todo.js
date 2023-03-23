const fs = require('fs');
const process = require('process');
const { json } = require('stream/consumers');



const data = fs.readFileSync('tasks.json')
const taskData = JSON.parse(data);

//function 
function addTask() {
  taskData.push({
    "task_id": null,
    "task_content": content,
    "status": false,
    "tag": []


  })
  fs.writeFileSync('tasks.json', JSON.stringify(taskData, null, 4));

}

function deleteTask() {
  let indexDelete = parseInt(args1) - 1;
  // console.log(indexDelete);
  let dataItem = taskData[indexDelete];
  taskData.splice(indexDelete, 1);
  fs.writeFileSync('tasks.json', JSON.stringify(taskData, null, 4));
  console.log(`"${dataItem.task_content}" telah di hapus dari daftar`);
}

function showList() {
  for (let i = 0; i < taskData.length; i++) {
    console.log(`${i + 1}.[${taskData[i].status ? 'X' : ' '}] ${taskData[i].task_content}`);
  }
}
function showTask(){
  for(let i = 0; i <taskData.length; i++)
    console.log(`task_id : ${i+1}.[${taskData[i].status ? 'X': ' '}] ${taskData[i].task_content}`);
  }


function completeTask() {
  let taskComplete = parseInt(args1) - 1;
  let dataItem = taskData[taskComplete]
  let complete = taskData[taskComplete].status = true
  fs.writeFileSync('tasks.json', JSON.stringify(taskData, null, 4));
  console.log(`"${dataItem.task_content}" telah selesai`);
}
function uncompleteTask() {
  let taskComplete = parseInt(args1) - 1;
  let dataItem = taskData[taskComplete]
  let complete = taskData[taskComplete].status = false
  fs.writeFileSync('tasks.json', JSON.stringify(taskData, null, 4));
  console.log(`"${dataItem.task_content}" status selesai telah dibatalkan.`);
}



const args = process.argv.slice(2);
const command = args[0];
const args1 = process.argv[3]
let content = args.slice(1).join(" ")
const commandList = ` >>> JS TODO <<< 
 $node todo.js <command>
 $node todo.js list
 $node todo.js task <task_id>
 $node todo.js add <task_content>
 $node todo.js delete <task_id>
 $node todo.js complete <task_id>
 $node todo.js uncomplete <task_id>
 $node todo.js list:outstanding asc|desc
 $node todo.js list:completed asc|desc
 $node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
 $node todo.js filter:<tag_name>`

switch (command) {
  case "help":
    console.log(commandList)
    break;
  case "list":
    console.log("Daftar Pekerjaan");
    showList();
    break;
  case "task":
  showTask();
      break;
  case "add":
    addTask();
    console.log(`"${content}" telah di tambahkan. `);
    break;
  case "delete":
    deleteTask();
    // console.log(`"${dataItem.task_content}" telah di hapus dari daftar`);
    break;
  case "complete":
    completeTask();
    break;
  case "uncomplete":
    uncompleteTask();
    break;
    case "list:outstanding":
      switch(args1) {
        case "asc":
          console.log("Daftar Pekerjaan");
          for (let i = 0; i < taskData.length; i++) {
            if (taskData[i].status === false) {
              console.log(`${i + 1}.[ ]${taskData[i].task_content}`);
            }
          }break;
        case "desc":
          console.log("Daftar Pekerjaan");
          for (let j = taskData.length - 1; j >= 0; j--) {
            if (taskData[j].status === false) {
              console.log(`${j+1}.[ ]${taskData[j].task_content}`);
            }
          }
          break;
      }break;
  case "list:completed":
    
    break;
  case "tag":
    let indexTags = parseInt(args2) - 1;
    let words = '';
    let tags = taskData[indexTags].tag;
    let tag = taskData[indexTags];
    for (let i = 4; i < args.length; i++) {
      tags.push(args[i]);
      console.log(args[i])
      words += args[i] + ' ';
    }   
    fs.writeFileSync('data.json', JSON.stringify(taskData, null, 4));
    console.log(`Tags '${words.trim()}' telah ditambahkan ke daftar ${tag.task_content}`);
    break;
  default:
    console.log(commandList)
    break;
}