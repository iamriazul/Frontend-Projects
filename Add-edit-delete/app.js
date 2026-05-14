
let editingTaskId = null;
const tasks = [];

function renderTaskList (){
    const listElement = document.getElementById("task-list");
    const taskElementsArr = []
   tasks.forEach(task => {
      const taskElement = document.createElement("div");
      const labelElement = document.createElement("label");
      const checkboxElement = document.createElement("input");
      const taskTitleElement = document.createElement("span");
      const editBtnElement = document.createElement("button");
      const deleteBtnElement= document.createElement("button");


      checkboxElement.setAttribute("id",`task-${task.id}-checkbox`);
      checkboxElement.setAttribute("type", "checkbox");


      taskTitleElement.textContent = task.title;


      labelElement.setAttribute("for",`task-${task.id}-checkbox`);
      labelElement.appendChild(checkboxElement);

     if (editingTaskId === task.id) {
            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.value = task.title;
            inputElement.id = `edit-input-${task.id}`;

            labelElement.appendChild(inputElement);
        } else {
            const taskTitleElement = document.createElement("span");
            taskTitleElement.textContent = task.title;
            labelElement.appendChild(taskTitleElement);
        }

        // Edit / Save button
        editBtnElement.textContent = (editingTaskId === task.id) ? "Save" : "Edit";
        editBtnElement.addEventListener("click", () => {
            updateTask(task.id);
        });
      
        /* Delete button */
                    deleteBtnElement.textContent = "Delete";

            deleteBtnElement.addEventListener("click", () => {
                deleteTask(task.id);
            });

     /*  editBtnElement.textContent="Edit"; */
      /* deleteBtnElement.textContent="Delete"; */


      taskElement.appendChild(labelElement);
      taskElement.appendChild(editBtnElement);
      taskElement.appendChild(deleteBtnElement);
      taskElementsArr.push(taskElement);
   })
   listElement.replaceChildren(...taskElementsArr);
}


/* For edit button */
function updateTask(taskId) {
    const task = tasks.find(t => t.id === taskId);

    if (!task) return;

    // If already editing → SAVE
    if (editingTaskId === taskId) {
        const inputElement = document.getElementById(`edit-input-${taskId}`);
        const newValue = inputElement.value.trim();

        if (newValue !== "") {
            task.title = newValue;
        }

        editingTaskId = null; // exit edit mode
    } else {
        // Start editing
        editingTaskId = taskId;
    }

    renderTaskList();
}



/* For delete button */
function deleteTask(taskId) {
    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) return;

    tasks.splice(index, 1);

    // If the deleted task was being edited → reset
    if (editingTaskId === taskId) {
        editingTaskId = null;
    }

    renderTaskList();
}
function createTask (){
    const taskCreationInputElement = document.getElementById("add-task-input");
    const taskTitle = taskCreationInputElement.value;
    const newTask = {
        id: new Date().getTime(),
        title: taskTitle,
        done:false,
    }
    tasks.push(newTask);
    taskCreationInputElement.value = "";
    renderTaskList();
}

function addListnerForTaskCreationBtn(){
    const taskCreationBtnElement = document.getElementById("task-creation-button");
    
    taskCreationBtnElement.addEventListener("click", () => {
      createTask();
    })
}

addListnerForTaskCreationBtn();