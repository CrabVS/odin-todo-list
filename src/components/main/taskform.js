import './taskform.css';

import createTask from './task/task';
import { getNewId, addTask } from './taskservice';

const pageContainerEl = document.getElementById('page-container');
const taskContainerEl = document.getElementById('task-container');

const createNewTask = function createNewTask(taskInfo) {
    const taskEl = createTask(taskInfo);

    taskContainerEl.appendChild(taskEl);
}

const getTaskData = function getTaskData() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDueData = document.getElementById('task-duedate').value;
    const taskNotes = document.getElementById('task-notes').value;
    const taskPriority = document.getElementById('task-priority').checked;
    const taskId = getNewId();

    const formData = {
        id: taskId,
        title: taskTitle, 
        description: taskDescription, 
        duedate: taskDueData, 
        notes: taskNotes,
        priority: taskPriority,
        completed: false
    }

    return formData;
}

const removeTaskForm = function removeTaskForm() {
    const taskFormEl = document.getElementById('task-form');
    pageContainerEl.removeChild(taskFormEl);
}

const addNewFormListeners = function addNewTaskFormListeners() {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {
        event.preventDefault();
        const taskData = getTaskData();
        addTask(taskData);
        createNewTask(taskData);
        removeTaskForm();
    });
    formBtnEls[1].addEventListener('click', () => {
        removeTaskForm();
    });
}

const addEditFormListeners = function addEditTaskFormListeners() {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {

    });
    formBtnEls[1].addEventListener('click', () => {
        
    });
}

const createTaskForm = function createTaskForm(taskInfo = {}) {
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
    
    if (!(Object.keys(taskInfo).length === 0 && taskInfo.constructor === Object)) {
        addFormValues(taskInfo, taskFormEl);
        addEditFormListeners();
    } else {
        addNewFormListeners();
    }
}

const addFormValues = function addFormValuesFromTask(taskInfo, taskFormEl) {

}

export { createTaskForm, createNewTask };