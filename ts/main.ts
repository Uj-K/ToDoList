class TodoList {
    userInput: string;
}

let tasks: TodoList[] = [];

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
     * otherwise, null will be returned with alert error messages
     */
    function getTask(): TodoList | null {
        // get the input
        let inputTextbox = document.querySelector("#todo-input") as HTMLInputElement;

        // flag variable
        let isValidData:boolean = true;

        // Check if the input is empty. If so, pop up alert
        let userInput: string = inputTextbox.value.trim();
        if (userInput == "") { 
            isValidData = false;
            alert("Please write something!");
        }

        //  Create and populate ToDoList object if the data is valid
        if (isValidData) {
            let addedTask = new TodoList();
            addedTask.userInput = userInput;

            return addedTask;
        }
        return null;
    }

    /**
     * Added a ToDoList object to the webpage
     * @param tdl Valid data to be added
     */
    function addTask(tdl:TodoList):void {
        tasks.push(tdl);
        let todoList = document.querySelector("#todo-list") as HTMLUListElement ;
        let listItem = document.createElement("li");
        listItem.textContent = tdl.userInput;
        todoList.appendChild(listItem);
    }
}