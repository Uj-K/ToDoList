class TodoList {
}
let tasks = [];
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-todo");
    addTaskBtn.onclick = processTask;
};
function processTask() {
    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
    }
    function getTask() {
        let inputTextbox = document.querySelector("#todo-input");
        let isValidData = true;
        let userInput = inputTextbox.value.trim();
        if (userInput == "") {
            isValidData = false;
            alert("Please write something!");
        }
        if (isValidData) {
            let addedTask = new TodoList();
            addedTask.userInput = userInput;
            return addedTask;
        }
        return null;
    }
    function addTask(tdl) {
        tasks.push(tdl);
        let todoList = document.querySelector("#todo-list");
        let listItem = document.createElement("li");
        listItem.textContent = tdl.userInput;
        todoList.appendChild(listItem);
    }
}
