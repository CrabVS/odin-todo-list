import './task.css';

const createListeners = function createTaskListeners() {

}

const createContent = function createTaskContent() {

}

const createTask = function createTask(taskInfo) {
    const taskEl = document.createElement('div');

    taskEl.classList.add('task');

    createContent();
    createListeners();
    
    return taskEl;
}

export default createTask;