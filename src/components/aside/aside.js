import './aside.css';
import { addProject, removeProject, setCurrentCategory, hasProject } from '../../taskservice';
import { refreshTasks } from '../main/main';

const pageContainerEl = document.getElementById('page-container');
const projectList = document.getElementById('project-list');

const switchProjects = function switchProjects(projectName) {
    setCurrentCategory(projectName);
    refreshTasks();
}

const addProjectToList = function addProjectToList(projectName) {
    const newProject = document.createElement('li');
    newProject.innerHTML = `<a>${projectName}</a><button class="btn" tabindex="-1">X</button>`;
    projectList.appendChild(newProject);

    const projectDeleteBtn = newProject.querySelector('button');
    projectDeleteBtn.addEventListener('click', () => {
        newProject.remove();
        removeProject(projectName);
        refreshTasks();
    });
    
    const projectLinkEl = newProject.querySelector('a');
    projectLinkEl.addEventListener('click', () => switchProjects(projectName));

}

const removeProjectForm = function removeTaskForm() {
    const taskProjectEl = document.getElementById('task-form');
    pageContainerEl.removeChild(taskProjectEl);
    refreshTasks();
}

const addFormListeners = function addNewTaskFormListeners() {
    const formBtnEls = document.querySelectorAll('#form-buttons .btn');
    formBtnEls[0].addEventListener('click', (event) => {
        event.preventDefault();
        const projectName = document.getElementById('project-title').value;
        if (!hasProject(projectName)) {
            addProject(projectName);
            addProjectToList(projectName);
        }
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
    const projectDefaultEl = document.getElementById('project-default');

    addProjectBtn.addEventListener('click', createProjectForm);
    addProjectBtn.blur();

    projectDefaultEl.addEventListener('click', () => switchProjects('default'));
}

const initializeAside = function initializeAside() {
    initializeListeners();
}

export default initializeAside;