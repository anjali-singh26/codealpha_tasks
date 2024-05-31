const inputBox = document.querySelector('#inputBox');
const list = document.querySelector('#list');

document.addEventListener("DOMContentLoaded", loadTasks);

inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

function addItem(task, isDone = false) {
    if (task.trim() === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `${task} <i>❌</i>`;
    if (isDone) {
        listItem.classList.add('done');
    }

    listItem.addEventListener("click", function() {
        this.classList.toggle('done');
        saveTasks();
    });

    listItem.querySelector("i").addEventListener("click", function(event) {
        event.stopPropagation();
        listItem.remove();
        saveTasks();
    });

    list.appendChild(listItem);
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    list.querySelectorAll('li').forEach(item => {
        tasks.push({
            text: item.firstChild.textContent.trim(),
            done: item.classList.contains('done')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => addItem(task.text, task.done));
    }
}