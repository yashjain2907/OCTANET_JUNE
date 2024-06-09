function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="task-details">
            <span><strong>Task:</strong> ${taskText}</span>
            <span><strong>Due Date:</strong> ${dueDate}</span>
            <span><strong>Priority:</strong> ${priority}</span>
            <span><strong>Category:</strong> ${category}</span>
        </div>
        <div>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    listItem.dataset.priority = priority;
    taskList.appendChild(listItem);
    sortTasks(taskList);
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'Medium';
    categoryInput.value = '';
}

function completeTask(button) {
    const listItem = button.parentElement.parentElement;
    const completedTaskList = document.getElementById('completedTaskList');
    listItem.classList.add('completed');
    button.remove();
    completedTaskList.appendChild(listItem);
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}

function sortTasks(taskList) {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority];
    });
    tasks.forEach(task => taskList.appendChild(task));
}
