let tasks = { default: [] }
let currentCategory = 'default';
let displayAll = false;

let currentId = 0;

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
    tasks[currentCategory].forEach(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
            console.log(task);
        }
    });
}

const getTasks = function getTasks() {
    return tasks[currentCategory];
}

export { getNewId, addTask, deleteTask, addCategory, deleteCategory, getTasks, toggleTaskCompleted }