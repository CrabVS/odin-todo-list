import './main.css';
import './taskform.css';

import { createTaskForm } from './taskform';
import { getTasks } from './taskservice';
import { createNewTask } from './taskform';

const refreshTasks = function refreshTasks() {
    const tasks = getTasks();
    tasks.forEach(task => {
        createNewTask(task);
    });
}

const initializeListeners = function initializeListeners() {
    const addTaskBtnEl = document.getElementById('task-btn');
    addTaskBtnEl.addEventListener('click', () => {
        createTaskForm();
    });
}

const initializeMain = function initializeMain() {
    initializeListeners();
    refreshTasks();
}

export default initializeMain;