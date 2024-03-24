document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
    }

    todoList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('complete-btn')) {
            toggleTaskCompletion(target.parentElement);
        } else if (target.classList.contains('delete-btn')) {
            deleteTask(target.parentElement);
        }
    });

    function toggleTaskCompletion(task) {
        task.classList.toggle('completed');
    }

    function deleteTask(task) {
        todoList.removeChild(task);
    }
});
