import './main.css';

import { getTasks } from '../../taskservice';
import { createTaskForm, createNewTask, formatDate, advanceAndFormatDate } from './taskform';

const taskContainerEl = document.getElementById('task-container');

const refreshTasks = function refreshTasks() {
    const tasks = getTasks();

    taskContainerEl.innerHTML = ``;

    tasks.forEach(task => {
        createNewTask(task);
    });
}

const refreshTodayTasks = function refreshTodayTasks() {
    const tasks = getTasks();

    taskContainerEl.innerHTML = ``;

    tasks.forEach(task => {
        if (task.duedate === formatDate(new Date())) {
            createNewTask(task);
        }
    });
}

const refreshWeekTasks = function refreshWeekTasks() {
    const tasks = getTasks();

    taskContainerEl.innerHTML = ``;

    tasks.forEach(task => {
        if (task.duedate <= advanceAndFormatDate(new Date(), 7)) {
            createNewTask(task);
        }
    });
}

const refreshImportantTasks = function refreshImportantTasks() {
    const tasks = getTasks();

    taskContainerEl.innerHTML = ``;

    tasks.forEach(task => {
        if (task.priority) {
            createNewTask(task);
        }
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
}

export { initializeMain, refreshTasks, refreshTodayTasks, refreshWeekTasks, refreshImportantTasks }