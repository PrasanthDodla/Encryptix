// Script for handling projects and tasks
const projectList = document.getElementById('projectList');
const taskList = document.getElementById('taskList');

function createProject() {
    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    if (projectName && projectDescription) {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <div>
                <h3>${projectName}</h3>
                <p>${projectDescription}</p>
            </div>
            <button onclick="deleteProject(this)">Delete</button>
        `;
        projectList.appendChild(projectItem);

        document.getElementById('projectName').value = '';
        document.getElementById('projectDescription').value = '';
    } else {
        alert('Please enter project name and description.');
    }
}

function deleteProject(button) {
    const projectItem = button.parentElement;
    projectList.removeChild(projectItem);
}

function createTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (taskName && taskDeadline) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div>
                <h3>${taskName}</h3>
                <p>Deadline: ${taskDeadline}</p>
            </div>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);

        document.getElementById('taskName').value = '';
        document.getElementById('taskDeadline').value = '';
    } else {
        alert('Please enter task name and deadline.');
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
