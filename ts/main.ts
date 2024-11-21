/**
 * The TodoList class defines the structure of an object 
 * that represents a task item
 * userInput: Stores the text of the task item entered by the user
 * completed: Indicates whether the task item is completed or not
 * (true means completed, false means not completed)
 */
class TodoList {
    userInput: string;
    completed: boolean;
}

/**
 * Array that will store task items, 
 * each task item is represented as a TodoList object.
 */
let tasks: TodoList[] = [];

/**
 * When the page is loaded, 
 * this function sets up the click event handler for the add task button
 * When the button is clicked, the processTask function will be called
 */
window.onload = function () { 
    let addTaskBtn = document.querySelector("#add-todo") as HTMLButtonElement;
    addTaskBtn.onclick = processTask; 
}

/**
 * Retrieves the task from the user and saves it to userTask using getTask()
 * If userTask is not null, 
 * the addTask function is called to add the task to the array
 * Then, the text box is cleared
 */
function processTask() { 
    let userTask = getTask(); 
    if (userTask != null) { 
        addTask(userTask); 
        clearTextBox(); 
    }

    /**
     * Clear the input text box
     */
    function clearTextBox() {
        let inputTextbox = document.querySelector("#todo-input") as HTMLInputElement;
        inputTextbox.value = "";
    }

    /**
     * Retrieves the task data from the HTML page
     * If the data is valid, a TodoList object will be returned
     * Otherwise, null will be returned, and an error alert will be shown
     */
    function getTask(): TodoList | null {
        // get the input
        let inputTextbox = document.querySelector("#todo-input") as HTMLInputElement;

        // flag variable
        let isValidData: boolean = true;

        // check if the input is empty. If so, show an alert
        let userInput: string = inputTextbox.value.trim();
        if (userInput == "") {
            isValidData = false;
            alert("Please write something!");
        }

        // create and populate a TodoList object if the data is valid
        if (isValidData) {
            let addedTask = new TodoList();
            addedTask.userInput = userInput;

            return addedTask;
        }
        return null;
    }

    /**
     * Adds a TodoList object to the webpage
     * Sets up an event handler to toggle the completion status of tasks
     * @param tdl The valid TodoList object to be added
     */
    function addTask(tdl: TodoList): void {
        tasks.push(tdl);
        let todoList = document.querySelector("#todo-list") as HTMLUListElement;
        let listItem = document.createElement("li");
        listItem.textContent = tdl.userInput;
        listItem.onclick = function() {
            taskCompletion(listItem, tdl);
        }
        todoList.appendChild(listItem);
    }

    /**
     * Switch the completion status of a task 
     * and update the style accordingly when clicked
     * @param listItem The HTML <li> (list) element that represents the task
     * @param tdl The TodoList object that contains the task data
     */
    function taskCompletion (listItem: HTMLLIElement, tdl: TodoList): void {
        tdl.completed = !tdl.completed; // Negation operator 
        if (tdl.completed) {
            listItem.classList.add("completed");
        } 
        else {
            listItem.classList.remove("completed");
        }
    }
}