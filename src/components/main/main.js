import './main.css';
import './taskform.css';

import createTaskForm from './taskform';

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