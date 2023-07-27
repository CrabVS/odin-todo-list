import './main.css';
import './taskform.css';
import createTask from './task/task';

const pageContainerEl = document.getElementById('page-container');
const taskContainerEl = document.getElementById('task-container');

const addTask = function addTask(taskInfo) {
    const taskEl = createTask(taskInfo);

    taskContainerEl.appendChild(taskEl);
}

const addFormListeners = function addTaskFormListeners() {
}

const createTaskForm = function createTaskForm() {
    const taskFormEl = document.createElement('div');
    taskFormEl.id = 'task-form';
    taskFormEl.innerHTML = 
    `<form>
        <fieldset>
            <legend>Task Creator</legend>
            <div class="form-group">
                <label for="task-title">Title</label>
                <input type="text" id="task-title" name="task-title">
            </div>
            <div class="form-group">
                <label for="task-description">Description</label>
                <textarea name="task-description" id="task-description" cols="20" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="task-duedate">Due Date</label>
                <input type="date" id="task-duedate" name="task-duedate">
            </div>
            <div class="form-group">
                <label for="task-notes">Notes</label>
                <input type="text" id="task-notes" name="task-notes">
            </div>
            <div class="form-group" id="priority-box">
                <label for="task-priority">Priority</label>
                <input type="checkbox" name="task-priority" id="task-priority">
            </div>
        </fieldset>
        <div id="form-buttons">
            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn">Cancel</button>
        </div>
    </form>`

    pageContainerEl.appendChild(taskFormEl);

    addFormListeners();
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