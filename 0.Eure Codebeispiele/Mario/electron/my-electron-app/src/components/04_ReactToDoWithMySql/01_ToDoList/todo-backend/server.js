const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'todo_app'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Routes
app.get('/getalltodos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error('Error fetching todos:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO todos (text) VALUES (?)', [text], (err, result) => {
    if (err) {
      console.error('Error adding todo:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json({ id: result.insertId, text, done: false });
  });
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting todo:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json({ message: 'Todo deleted successfully' });
  });
});



app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const { done } = req.body;
    db.query('UPDATE todos SET done = ? WHERE id = ?', [done, id], (err, result) => {
      if (err) {
        console.error('Error updating todo:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json({ message: 'Todo updated successfully' });
    });
  });

// Close MySQL connection when server shuts down
process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
    }
    console.log('Disconnected from MySQL database');
    process.exit();
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



