document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcodierte Testdaten
    var username = 'marwa';
    var password = 'password';

    if (username === username && password === password) {
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
      <span id = ${taskInput.value}>${taskInput.value}</span>
      <input id = ${taskInput.value} value = ${taskInput.value}/>
      <button onclick="deleteTask(this)"> <i class="fa-solid fa-trash"></i></button>
      <button onclick="editTask(${taskInput.id})"> <i class="fa-solid fa-edit"></i></button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = '';
  }

  //Function to edit a task
  function editTask(button){

  console.log(button);
    }


  // Function to delete a task
  function deleteTask(button) {
    const li = button.parentNode;
    const taskList = li.parentNode;
  
    taskList.removeChild(li);
  }
