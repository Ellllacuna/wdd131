let tasks = [];

function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
    </div>
    </li>`
}

function renderTasks(tasks) {
    const listElement = document.getElementById('todoList');
    listElement.innerHTML = "";

    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}


function newTask() {
    const task = document.querySelector('#todo');
    const taskValue = task.value.trim();

    tasks.push({ detail: taskValue, completed: false });

    renderTasks(tasks);
}

function removeTask(taskElement) {

    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );

    taskElement.remove();
}

function completeTask(taskElement) {

    const taskIndex = tasks.findIndex(
        task => task.detail === taskElement.childNodes[0].innerText
    );

    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;

    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    console.log(event.target);
    const parent = event.target.closest("li");
    if (event.target.dataset.action === "delete") {
        removeTask(parent);
    }
    if (event.target.dataset.action === "complete") {
        completeTask(parent);
    }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector('#todoList').addEventListener("click", manageTasks);

renderTasks(tasks);


