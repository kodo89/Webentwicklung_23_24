document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcodierte Testdaten
    var hardcoded_username = 'marwa';
    var hardcoded_password = 'password';

    if (username === hardcoded_username && password === hardcoded_password) {
        window.location.href="todo.html";
    } else {
        alert('Benutzername oder Passwort falsch!');
    }
});

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
      <button onclick="deleteTask(this)"> <i class="fa-solid fa-trash"></i></button>
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
  