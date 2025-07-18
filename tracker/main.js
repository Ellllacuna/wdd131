const addTaskBtn = document.getElementById("addTaskButton");
const taskForm = document.querySelector(".task-input");
const finalAddBtn = document.getElementById("addTaskButtonFinal");
const taskList = document.getElementById("tasks");
const example = document.querySelector(".example");

taskForm.classList.add("hidden");

addTaskBtn.addEventListener("click", () => {
    taskForm.classList.remove("hidden");
    addTaskBtn.classList.add("hidden");
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value.trim();
    const taskDesc = document.getElementById("taskDesc").value.trim();
    const dueDate = document.getElementById("dueDate").value;

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
    <label>
      <input type="checkbox">
      <span class="task-text-container">
        <span class="task-text">
          <div class="task-name"><strong>${taskName}</strong></div>
          <div class="task-desc">${taskDesc}</div>
        </span>
        <span class="task-date">
          <div class="due-date">
            <span class="due-date-label">Due: </span>
            <span class="due-date-value">${dueDate}</span>
          </div>
        </span>
      </span>
    </label>
  `;

  taskList.appendChild(li);

  const today = new Date().toISOString().split("T")[0];
  if (dueDate < today) {
    const duedateValue = li.querySelector(".due-date-value");
    duedateValue.classList.add("overdue");
  }

  taskForm.reset();
  taskForm.classList.add("hidden");
  addTaskBtn.classList.remove("hidden");
  example.classList.add("hidden");
})


const studyTips = [
    "Take regular breaks to improve focus and retention",
    "Frogs drink with their skin",
    "Create visual aids like charts or flashcards",
    "Keep your study space clean and free of discractions"
];

const tipText = document.getElementById("studyTipText");

const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
tipText.textContent = `${randomTip}`;

