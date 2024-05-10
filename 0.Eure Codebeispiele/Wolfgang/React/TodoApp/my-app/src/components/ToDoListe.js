import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos') // Anfrage an den Server senden
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Fehler beim Abrufen der Todos:', error));
  }, []);

  return (
    <div>
      <h2>Todo-Liste</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>Aufgabe:</strong> {todo.task}<br />
            <strong>Priorität:</strong> {todo.priority}<br />
            <strong>Fälligkeitsdatum:</strong> {todo.due_date}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
