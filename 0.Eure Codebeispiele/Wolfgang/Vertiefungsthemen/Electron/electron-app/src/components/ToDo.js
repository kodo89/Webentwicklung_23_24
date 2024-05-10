// in TodoComponent.js
import React, { useState, useEffect } from 'react';

function ToDo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/todos') // Anfrage an Ihren Express-Server senden
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

export default ToDo;
