document.addEventListener('DOMContentLoaded', () => {
    const buttonAddTask = document.querySelector('.button-add-task');
    const inputTask = document.querySelector('.input-task');
    const taskList = document.querySelector('.list-tasks');

    let tasks = [];

    function addTask() {
        const taskText = inputTask.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, done: false });
            inputTask.value = '';
            updateTaskList();
        }
    }

    function updateTaskList() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task', task.done ? 'done' : '');
            taskItem.setAttribute('data-aos', 'fade-up');
            taskItem.innerHTML = `
                <p>${task.text}</p>
                <div>
                    <button onclick="toggleTask(${index})">✔️</button>
                    <button onclick="deleteTask(${index})">❌</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
        const buttonAddTask = document.querySelector('.button-add-task');
        const inputTask = document.querySelector('.input-task');
        const taskList = document.querySelector('.list-tasks');

        let tasks = [];

        function addTask() {
            const taskText = inputTask.value.trim();
            if (taskText !== '') {
                tasks.push({ text: taskText, done: false });
                inputTask.value = '';
                updateTaskList();
            }
        }

        function updateTaskList() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task', task.done ? 'done' : '');
                taskItem.setAttribute('data-aos', 'fade-up');
                taskItem.innerHTML = `
            <p>${task.text}</p>
            <div>
                <i class="fa fa-check" onclick="toggleTask(${index})" data-aos="flip-left"></i>
                <i class="fa fa-trash" onclick="deleteTask(${index})" data-aos="flip-right"></i>
            </div>
        `;
                taskList.appendChild(taskItem);
            });
        }

        function toggleTask(index) {
            tasks[index].done = !tasks[index].done;
            updateTaskList();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            updateTaskList();
        }

        buttonAddTask.addEventListener('click', addTask);
        inputTask.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });

        document.addEventListener('DOMContentLoaded', updateTaskList);

    }

    function toggleTask(index) {
        tasks[index].done = !tasks[index].done;
        updateTaskList();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        updateTaskList();
    }

    buttonAddTask.addEventListener('click', addTask);
    inputTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    updateTaskList();
});