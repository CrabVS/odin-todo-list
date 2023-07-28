import './task.css';

const createListeners = function createTaskListeners() {

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
}

const createTask = function createTask(taskInfo) {
    const taskEl = document.createElement('div');

    taskEl.classList.add('task');

    createContent(taskEl, taskInfo);
    createListeners();
    
    return taskEl;
}

export default createTask;