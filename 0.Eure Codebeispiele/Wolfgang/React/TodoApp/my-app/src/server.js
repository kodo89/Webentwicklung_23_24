const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'todo' 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/task', (req, res) => {
  const { user_id, task, priority, due_date } = req.body;
  const INSERT_QUERY = 'INSERT INTO todos (user_id, task, priority, due_date) VALUES (?, ?, ?, ?)';

  connection.query(INSERT_QUERY, [user_id, task, priority, due_date], (error, results) => {
    if (error) {
      console.error('Fehler beim Einfügen der Aufgabe:', error);
      return res.status(500).json({ error: 'Interner Serverfehler' });
    }
    console.log('Aufgabe erfolgreich gespeichert!');
    res.status(201).json({ message: 'Aufgabe erfolgreich gespeichert!' });
  });
  
});

app.get('/todos', (req, res) => {
  const SELECT_QUERY = 'SELECT * FROM todos';

  connection.query(SELECT_QUERY, (error, results) => {
    if (error) {
      console.error('Fehler beim Abrufen der Todos:', error);
      return res.status(500).json({ error: 'Interner Serverfehler' });
    }
    
    res.status(200).json(results);
  });
});

// Fehlerrückgabe für nicht gefundenen Pfad
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ressource nicht gefunden' });
});





// Fehlerrückgabe für andere Fehler
app.use((err, req, res, next) => {
  console.error('Unerwarteter Fehler:', err);
  res.status(500).json({ error: 'Interner Serverfehler' });
});

app.listen(3001, () => {
  console.log('Server läuft auf Port 3001');
});
