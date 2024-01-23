// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
  const li = button.parentNode;
  const taskList = li.parentNode;

  taskList.removeChild(li);
}
