// based on the time of the a greeting is displayed
// good morning or good evening
const isMorning = new Date().getHours() < 12;
const greetingMessage = isMorning ? 'Good morning!' : 'Good evening!';
const greetingImage = isMorning ? 'images/morning.png' : 'images/evening.png';

// display message and image
const welcomeMessageTitle = document.getElementById('welcomeMessageTitle');
const welcomeMessageIcon = document.getElementById('welcomeMessageIcon');
const count = document.getElementById('count');

welcomeMessageTitle.innerText = greetingMessage;
welcomeMessageIcon.src = greetingImage;

// tasks
const todoList = document.getElementById('todoList');
let tasks = [
    {
        category: 'ri-shopping-basket-line',
        title: 'Buy milk',
        description: 'Milk is the best drink in the world.',
        isCompleted: true
    },
    {
        category: 'ri-shopping-basket-line',
        title: 'Buy Bread & Butter',
        description: 'Best Combo.',
        isCompleted: false
    }
];

// render tasks
function renderTasks() {
    // clear all tasks
    todoList.innerHTML = '';
    // render tasks
    tasks.forEach((task, index) => {
        todoList.innerHTML += `
            <li class="todo-list__item ${task.isCompleted ? 'todo-list__item--completed' : ''}">
                <input class="todo-list__item-input" type="checkbox" ${task.isCompleted ? 'checked' : ''} onChange="updateTask(${index})">
                <div class="todo-list__item-group">
                    <div class="todo-list__item-label">
                        <label class="todo-list__item-category">
                            <i class="${task.category}"></i>
                        </label>
                        <div class="todo-list__item-title">${task.title}</div>
                    </div>
                    <p class="todo-list__item-description">${task.description}</p>
                </div>
                <button class="todo-list__item-button todo-list__item-bottom--delete" onClick="deleteTask(${index})"><i class="ri-delete-bin-line"></i></button>
            </li>`;
    });

    // update the count
    count.innerHTML = tasks.filter(task => !task.isCompleted).length;
}
// initial call
renderTasks();

// Form Logic
const todoForm = document.getElementById('todoForm');
const todoFormInputCategory = document.getElementById('todoFormInputCategory');
const todoFormInputTitle = document.getElementById('todoFormInputTitle');
const todoFormInputDescription = document.getElementById('todoFormInputDescription');
const todoFormSubmitButton = document.getElementById('todoFormSubmitButton');

function addTask(event) {

    event.preventDefault();
    const taskCategory = todoFormInputCategory.value;
    const taskTitle = todoFormInputTitle.value;
    const taskDescription = todoFormInputDescription.value;

    // validate the values
    if (taskCategory === '' || taskTitle === '') {
        alert('Please fill in all fields');
        return;
    }

    // add the task to the array
    tasks.push({
        category: taskCategory,
        title: taskTitle,
        description: taskDescription
    });

    renderTasks();
    
    // clear the form
    todoFormInputCategory.value = 'ri-shopping-basket-line';
    todoFormInputTitle.value = '';
    todoFormInputDescription.value = '';
}

function deleteTask(index) {
    // console.log(index);
    // remove the task from the array
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index) {
    // console.log(index);
    // update the task in the array
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks();
}

todoFormSubmitButton.addEventListener('click', addTask);
