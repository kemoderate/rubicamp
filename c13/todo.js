const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
 
const data = fs.readFileSync('tasks.json')
const taskData = JSON.parse(data);


function addTask(){
    taskData.push(args.slice(1).join(" "))
   fs.writeFileSync('tasks.json',JSON.stringify(taskData),"utf-8")
}
    
function deleteTask(){
 taskData.splice()
}

const args = process.argv.slice(2); 


const command = args[0]; 

switch (command) {
  case "list":
    console.log("todo.js list");
    break;
  case "task":
    console.log(`todo.js task ${args[1]}`);
    break;
  case "add": 
   addTask()
    console.log(`"${args.slice(1).join(" ")}" telah di tambahkan. `);
    break;
  case "delete":
    deleteTask();
    console.log(`todo.js delete ${args[1]}`);
    break;
  case "complete":
    console.log(`todo.js complete ${args[1]}`);
    break;
  case "uncomplete":
    console.log(`todo.js uncomplete ${args[1]}`);
    break;
  case "list:outstanding":
    console.log(`todo.js list:outstanding ${args[1]}`);
    break;
  case "list:completed":
    console.log(`todo.js list:completed ${args[1]}`);
    break;
  case "tag":
    console.log(`todo.js tag ${args[1]} ${args.slice(2).join(" ")}`);
    break;
  default:
    console.log(" >>> JS TODO <<< ");
    console.log("todo.js <command>");
    console.log("todo.js list");
    console.log("todo.js task <task_id>");
    console.log("todo.js add <task_content>");
    console.log("todo.js delete <task_id>");
    console.log("todo.js complete <task_id>");
    console.log("todo.js uncomplete <task_id>");
    console.log("todo.js list:outstanding asc|desc");
    console.log("todo.js list:completed asc|desc");
    console.log("todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
    console.log("todo.js filter:<tag_name>");
    break;
}
