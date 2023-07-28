let tasks = { default: [] }
let currentCategory = 'default';

let currentId = 0;

const getNewId = function getNewId() {
    const newId = currentId;
    currentId += 1;
    return newId;
}

const addTask = function addTask(taskData) {
    tasks[currentCategory].push(taskData);
}

const deleteTask = function deleteTask(taskId) {

}

const addCategory = function addCategory() {

}

const deleteCategory = function deleteCategory() {

}

export { getNewId, addTask, deleteTask, addCategory, deleteCategory }