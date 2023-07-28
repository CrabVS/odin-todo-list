let tasks = { default: [], default2: ['hi'] }
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

export { getNewId, addTask, deleteTask, addCategory, deleteCategory }