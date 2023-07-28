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
    if (currentCategory !== 'all') {
        tasks[currentCategory].forEach((task, index) => {
            if (task.id === taskId) {
                const sliceRange = tasks[currentCategory].length === 1 ? -1 : 1;
                tasks[currentCategory] = tasks[currentCategory].slice(index, sliceRange);
            }
        });
    }
    console.log(tasks);
}

const addCategory = function addCategory() {

}

const deleteCategory = function deleteCategory() {

}

export { getNewId, addTask, deleteTask, addCategory, deleteCategory }