class TodoList {
}
let newTask = new TodoList();
newTask.todoInput = "let me see...";
console.log(newTask);
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-todo");
    addTaskBtn.onclick = processTask;
};
function processTask() {
    alert("We added your task in the list!");
    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
    }
    function getTask() {
    }
    function addTask(tdl) {
    }
}
