import './main.css';
import createTask from './task/task';

const taskContainerEl = document.getElementById('task-container');

const addTask = function addTask(taskInfo) {
    const taskEl = createTask(taskInfo);

    taskContainerEl.appendChild(taskEl);
}

const createTaskForm = function createTaskForm() {
    addTask({});
}

const initializeListeners = function initializeListeners() {
    const addTaskBtnEl = document.getElementById('task-btn');
    addTaskBtnEl.addEventListener('click', () => {
        createTaskForm();
    });
}

const initializeMain = function initializeMain() {
    initializeListeners();
}

export default initializeMain;