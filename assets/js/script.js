let taskList = [];
let inputTodo = document.querySelector("#inputTodo");
let inputTime = document.querySelector("#time");

function addTodo(){
    let value = inputTodo.value
    let tvalue = inputTime.value
    // console.log(value)
    // taskList.push(value);
    taskList.unshift({todo: value, time: tvalue});
    inputTodo.value = '';
    displayList();
}

function displayList(){
    let listBox = document.querySelector("#listBox");
    let newList = '';
    for (let i = 0; i < taskList.length; i++) {
        newList += `
            <li class="list">
                <p> ${taskList[i].todo}</p>
                <p> ${taskList[i].time}</p>
                <img src="./assets/img/delete-bin-line (1).png" alt="bin" class="bin" onclick="taskList.splice
                (${i}, 1); displayList(); ">
            </li>
        `
        
    }
    listBox.innerHTML = newList;
}