import './task.css';
import deleteIcon from '../../../res/delete.svg';
import checkIcon from '../../../res/check-circle.svg';
import editIcon from '../../../res/note-edit.svg';

import { deleteTask, toggleTaskCompleted } from '../taskservice';
import { createTaskForm } from '../taskform';

const createListeners = function createTaskListeners(taskEl, taskInfo) {

    const iconBtnEls = taskEl.querySelectorAll('.task-buttons .icon');

    iconBtnEls[0].addEventListener('click', () => {
        deleteTask(taskInfo.id);
        taskEl.remove();
    });

    iconBtnEls[1].addEventListener('click', () => {
        toggleTaskCompleted(taskInfo.id);
        iconBtnEls[1].classList.toggle('task-completed');
    });

    iconBtnEls[2].addEventListener('click', () => {
        createTaskForm(taskInfo);
    });

}

const createIconButtons = function createTaskIconButtons(taskEl) {
    const iconContainerEl = taskEl.querySelector('.task-buttons');

    iconContainerEl.innerHTML = 
    `<img src="${deleteIcon}" alt="delete-icon" class="icon">
    <img src="${checkIcon}" alt="check-icon" class="icon">
    <img src="${editIcon}" alt="edit-icon" class="icon">`;
}

const createContent = function createTaskContent(taskEl, taskInfo) {
    taskEl.innerHTML = 
    `<h6>Title</h6>
    <h6>Notes</h6>
    <h6>00-00-0000</h6>
    <div class="task-buttons"></div>`

    const headerEls = taskEl.querySelectorAll('h6');
    headerEls[0].textContent = taskInfo.title;
    headerEls[1].textContent = taskInfo.notes;
    headerEls[2].textContent = taskInfo.duedate;

    createIconButtons(taskEl);

}

const createTask = function createTask(taskInfo) {
    const taskEl = document.createElement('div');

    taskEl.classList.add('task');

    createContent(taskEl, taskInfo);
    createListeners(taskEl, taskInfo);
    
    return taskEl;
}

export default createTask;