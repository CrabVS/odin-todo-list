import './taskform.css';

import createTask from './task/task';
import { getNewId, addTask, updateTask } from '../../taskservice';
import { refreshTasks } from './main';

const pageContainerEl = document.getElementById('page-container');
const taskContainerEl = document.getElementById('task-container');

const padTo2Digits = function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  
const formatDate = function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

const createNewTask = function createNewTask(taskInfo) {
    const taskEl = createTask(taskInfo);

    taskContainerEl.appendChild(taskEl);
}

const formatTaskData = function formatTaskData(taskData) {
    const currentDate = formatDate(new Date());

    if (taskData.title === '') {
        taskData.title = 'Title';
    }

    if (taskData.taskDescription === '') {
        taskData.description = 'Description';
    }

    if (taskData.duedate < currentDate) {
        taskData.duedate = currentDate;
    }

    if (taskData.notes === '') {
        taskData.notes = 'Notes Empty';
    }

    return taskData;
}

const createTaskData = function createTaskData() {
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

    return formatTaskData(formData);
}

const getFormData = function getFormData() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDueData = document.getElementById('task-duedate').value;
    const taskNotes = document.getElementById('task-notes').value;
    const taskPriority = document.getElementById('task-priority').checked;

    const formData = {
        title: taskTitle, 
        description: taskDescription, 
        duedate: taskDueData, 
        notes: taskNotes,
        priority: taskPriority,
    }

    return formatTaskData(formData);
}

const removeTaskForm = function removeTaskForm() {
    const taskFormEl = document.getElementById('task-form');
    pageContainerEl.removeChild(taskFormEl);
}

const addNewFormListeners = function addNewTaskFormListeners() {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {
        event.preventDefault();
        const taskData = createTaskData();
        addTask(taskData);
        createNewTask(taskData);
        removeTaskForm();
    });
    formBtnEls[1].addEventListener('click', () => {
        removeTaskForm();
    });
}

const addEditFormListeners = function addEditTaskFormListeners(taskId) {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {
        event.preventDefault();
        const formData = getFormData();
        updateTask(formData, taskId);
        refreshTasks();
        removeTaskForm();
    });
    formBtnEls[1].addEventListener('click', () => {
        removeTaskForm();
    });
}

const createTaskForm = function createTaskForm(taskInfo = {}) {
    const taskFormEl = document.createElement('div');
    const currentDate = formatDate(new Date());
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
                <input type="date" id="task-duedate" name="task-duedate" min="${currentDate}" value="${currentDate}">
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
        addFormValues(taskInfo);
        addEditFormListeners(taskInfo.id);
    } else {
        addNewFormListeners();
    }
}

const addFormValues = function addFormValuesFromTask(taskInfo) {
    const formTitle = document.getElementById('task-title');
    const formDescription = document.getElementById('task-description');
    const formDueDate = document.getElementById('task-duedate');
    const formNotes = document.getElementById('task-notes');
    const formPriority = document.getElementById('task-priority');

    formTitle.value = taskInfo.title;
    formDescription.value = taskInfo.description;
    formDueDate.value = taskInfo.duedate;
    formNotes.value = taskInfo.notes;
    formPriority.checked = taskInfo.priority;
}

export { createTaskForm, createNewTask };