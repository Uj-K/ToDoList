class TodoList {
    userInput: string;
}

//set up button click for add task to the list
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-todo") as HTMLButtonElement;
    addTaskBtn.onclick = processTask;
}

function processTask() {
    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
    }            

    /**
     * This function will retrieve the task data from the HTML page
     * If the data is valid a ToDoList object will be returned
     * otherwise, null will be returned with error messages
     */
    function getTask(): TodoList {
        let inputTextbox = document.querySelector("#todo-input") as HTMLInputElement;

        let isValidData:boolean = true;

        let userInput: string = inputTextbox.value.trim();
        if (userInput == "") { 
            isValidData = false;
            alert("Please add something!");
        }

        if (isValidData) {
            let addedTask = new TodoList();
            addedTask.userInput = userInput;

            return addedTask;
        }
        return null;
    }

    function addTask(tdl:TodoList):void {

    }
}