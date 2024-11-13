// Seletores para os elementos da página
const buttonAddTask = document.querySelector('.button-add-task');
const inputTask = document.querySelector('.input-task');
const taskList = document.querySelector('.list-tasks');

let tasks = [];

// Função para atualizar a lista de tarefas na tela
function updateTaskList() {
    taskList.innerHTML = '';  // Limpa a lista antes de renderizar novamente

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        if (task.done) taskItem.classList.add('done');  // Marca a tarefa como concluída

        taskItem.innerHTML = `
            <p>${task.text}</p>
            <div>
                <i class="fas fa-check" onclick="toggleTask(${index})"></i>
                <i class="fas fa-trash-alt" onclick="deleteTask(${index})"></i>
            </div>
        `;
        taskList.appendChild(taskItem);
    });

    // Salva a lista de tarefas no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, done: false });  // Adiciona a tarefa ao array
        inputTask.value = '';  // Limpa o campo de entrada
        updateTaskList();  // Atualiza a lista de tarefas
    }
}

// Função para marcar uma tarefa como concluída
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    updateTaskList();  // Atualiza a lista de tarefas
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);  // Remove a tarefa pelo índice
    updateTaskList();  // Atualiza a lista de tarefas
}

// Função para carregar as tarefas do localStorage quando a página é carregada
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    updateTaskList();  // Atualiza a lista de tarefas ao carregar
}

// Carrega as tarefas armazenadas ao carregar a página
loadTasks();

// Evento de clique no botão para adicionar tarefa
buttonAddTask.addEventListener('click', addTask);

// Permite adicionar tarefas ao pressionar a tecla Enter
inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
