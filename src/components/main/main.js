import './main.css';

import { createTaskForm } from './taskform';
import { getTasks } from '../../taskservice';
import { createNewTask } from './taskform';
import initializeAside from '../aside/aside';

const refreshTasks = function refreshTasks() {
    const taskContainerEl = document.getElementById('task-container');
    const tasks = getTasks();

    taskContainerEl.innerHTML = ``;

    tasks.forEach(task => {
        createNewTask(task);
    });
}

const initializeListeners = function initializeListeners() {
    const addTaskBtnEl = document.getElementById('task-btn');
    addTaskBtnEl.addEventListener('click', () => {
        addTaskBtnEl.blur();
        createTaskForm();
    });
}

const initializeMain = function initializeMain() {
    initializeListeners();
    refreshTasks();
    initializeAside();
}

export { initializeMain, refreshTasks }