import './aside.css';
import { addProject, removeProject } from '../../taskservice';

const pageContainerEl = document.getElementById('page-container');
const projectList = document.getElementById('project-list');

const addProjectToList = function addProjectToList(projectName) {
    const newProject = document.createElement('li');
    newProject.innerHTML = `<a>${projectName}</a><button class="btn" tabindex="-1">X</button>`;
    projectList.appendChild(newProject);

    const projectDeleteBtn = newProject.querySelector('button');
    projectDeleteBtn.addEventListener('click', () => {
        newProject.remove();
        removeProject(projectName);
    });
}

const removeProjectForm = function removeTaskForm() {
    const taskProjectEl = document.getElementById('task-form');
    pageContainerEl.removeChild(taskProjectEl);
}

const addFormListeners = function addNewTaskFormListeners() {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {
        event.preventDefault();
        const projectName = document.getElementById('project-title').value;
        addProject(projectName);
        addProjectToList(projectName);
        removeProjectForm();
    });
    formBtnEls[1].addEventListener('click', () => {
        removeProjectForm();
    });
}

const createProjectForm = function createProjectForm() {
    const projectFormEl = document.createElement('div');
    projectFormEl.id = 'task-form';
    projectFormEl.innerHTML = 
    `<form>
        <fieldset>
            <legend>Task Creator</legend>
            <div class="form-group">
                <label for="project-title">Project Name</label>
                <input type="text" id="project-title" name="project-title">
            </div>
        </fieldset>
        <div id="form-buttons">
            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn">Cancel</button>
        </div>
    </form>`

    pageContainerEl.appendChild(projectFormEl);
    addFormListeners();
}

const initializeListeners = function initializeListeners() {
    const addProjectBtn = document.getElementById('add-project-btn');

    addProjectBtn.addEventListener('click', createProjectForm);
    addProjectBtn.blur();
}

const initializeAside = function initializeAside() {
    initializeListeners();
}

export default initializeAside;