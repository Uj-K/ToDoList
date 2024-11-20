class TodoList {
    todoInput: String;
}

let newTask = new TodoList();
newTask.todoInput = "let me see...";

console.log(newTask);

//set up button click for add task to the list
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-todo") as HTMLButtonElement;
    addTaskBtn.onclick = processTask;
}

function processTask() {
    alert("We added your task in the list!");

    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
    }            

    /**
     * This function will retrieve the task data from the HTML page
     */
    function getTask(): TodoList {

    }

    function addTask(tdl:TodoList):void {

    }
}