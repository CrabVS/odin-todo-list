let tasks = { default: [] }
let currentCategory = 'default';
let displayAll = false;

let currentId = 0;

const getTaskFromCategory = function getTaskFromCategory(taskId) {
    let targetTask;
    tasks[currentCategory].forEach(task => {
        if (task.id === taskId) {
            targetTask = task;
        }
    });
    return targetTask;
}

const getNewId = function getNewId() {
    const newId = currentId;
    currentId += 1;
    return newId;
}

const addTask = function addTask(taskData) {
    if (!displayAll) {
        tasks[currentCategory].push(taskData);
    }
}

const deleteTask = function deleteTask(taskId) {
    if (!displayAll) {
        tasks[currentCategory].forEach((task, index) => {
            if (task.id === taskId) {
                tasks[currentCategory].splice(index, 1);
            }
        });
    }
}

const addCategory = function addCategory(category) {
    const newCategory = category.toLowerCase();
    if (!tasks.hasOwnProperty(newCategory)) {
        tasks[newCategory] = [];
        currentCategory = newCategory;
    } else {
        console.log('Error: Category already exists');
    }
}

const deleteCategory = function deleteCategory(category) {
    if (category !== 'default' && tasks.hasOwnProperty(category)) {
        delete tasks[category];

        if (currentCategory === category) {
            currentCategory = 'default';
        }
    }
}

const toggleTaskCompleted = function toggleTaskCompleted(taskId) {    
    const targetTask = getTaskFromCategory(taskId);
    targetTask.completed = !targetTask.completed;
}

const getTasks = function getTasks() {
    return tasks[currentCategory];
}

const updateTask = function updateTask(task, taskId) {
    const targetTask = getTaskFromCategory(taskId);

    targetTask.title = task.title;
    targetTask.description = task.description;
    targetTask.duedate = task.duedate;
    targetTask.notes = task.notes;
    targetTask.priority = task.priority;
}

export { 
    getNewId, 
    addTask, 
    deleteTask, 
    addCategory, 
    deleteCategory, 
    getTasks, 
    toggleTaskCompleted,
    updateTask }