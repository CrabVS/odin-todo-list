import './task.css';
import deleteIcon from '../../../res/delete.svg';
import checkIcon from '../../../res/check-circle.svg';
import editIcon from '../../../res/note-edit.svg';

const createListeners = function createTaskListeners() {

}

const createIconButtons = function createTaskIconButtons(taskEl) {
    const iconEl = taskEl.querySelector('.task-buttons');

    iconEl.innerHTML = 
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
    createListeners();
    
    return taskEl;
}

export default createTask;