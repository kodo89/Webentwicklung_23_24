import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { css } from "@emotion/react";
import Styles from './components/Styles';

const root = createRoot(document.body);

function App() {
    const [todos, setTodos] = useState([]);
    //const [lastId, setLastId] = useState(0); // Initialize last used ID
  
  
    useEffect(() => {
      fetchTodos()
        .then(data => {
          console.log("test - get all data from db: "+data[0].id);
          setTodos(data); // Set todos state with fetched data
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once on component mount
  
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const data = await fetchTodos();
    //       console.log("test - get all data from db: "+data);
    //       //setTodos(data); // Set todos state with fetched data
    //     } catch (error) {
    //       console.error('Error fetching todos:', error);
    //     }
    //   }
    //   fetchData();
    // }, []);
  
    const handleAddTodo = async (todoText) => {
      try {
        const newTodo = { text: todoText };
        const response = await addTodo(newTodo);
        setTodos(oldTodos => [...oldTodos, { ...newTodo, id: response.id }]);
        //setLastId(lastId + 1); // Update last used ID
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    };
  
  
    const handleDeleteTodo = async (todoIdToDelete) => {
      try {
        await deleteTodo(todoIdToDelete);
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== todoIdToDelete));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };
  
  
    const handleSetDone = async (todoId, done) => {
      try {
        await setTodoDone(todoId, done);
        setTodos(oldTodos => oldTodos.map(todo => todo.id === todoId ? { ...todo, done } : todo));
      } catch (error) {
        console.error('Error setting todo as done:', error);
      }
    };
  
  
  
    return (
      <div className={rootCss}>
        <ToDoInput onAddClicked={handleAddTodo}></ToDoInput>
        <ToDoList todos={todos}
        onDoneChanged={(done, id) => handleSetDone(id, done)}
        // onDoneChanged={handleSetDone
        //   //setTodos((oldTodos) => oldTodos.map((todo, _index) => _index === index ? Object.assign(todo, {done}) : todo))
        // }
        onToDoDelete={handleDeleteTodo}></ToDoList>
        
      </div>
    );
  }


root.render(<App/>);





// Delete a todo
async function deleteTodo(todoIdToDelete) {
    try {
      const response = await fetch(`http://localhost:3001/todos/${todoIdToDelete}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      const data = await response.json();
      console.log(data);
      return data; // Return the data object containing the message
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }
  
  
  // Add a new todo
  async function addTodo(insertText) {
    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(insertText) // Just pass the insertText object directly
      });
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
      const data = await response.json();
      console.log(data);
      return data; // Return the data object containing the new todo's id
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }
  
  
  function fetchTodos() {
    return fetch('http://localhost:3001/getalltodos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data; // Return the fetched data
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        throw error; // Re-throw the error to propagate it
      });
  }
  
  
  async function setTodoDone(todoId, done) {
    try {
      const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ done }) // Send the done status to update
      });
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      const data = await response.json();
      console.log(data);
      return data; // Return the data object containing the message
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }
  
  










