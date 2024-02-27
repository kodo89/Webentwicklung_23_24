import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

import path from "path";

const app = express();
const port = 5500;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('frontend'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo'
});
connection.connect();



connection.query('SELECT * from object where ID = 1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});



app.get("/refresh", (req, res) => {
    const query  = 'SELECT * from object where ID = ?';
    const id = 1;
    connection.query(query, [id], (error, results) => {
      if(error){
        res.status(500).send("Interner Serverfehler");
      } else {
        res.json(results);
        console.log('The solution is: ', results);
      }
    });
    //connection.end();
});



  
app.post("/newItem", (req, res) => {
    //connection.end();
        var sql = req.body;
        console.log(sql);
        console.log('INSERT INTO object (id, jokeText, jokeType) VALUES ('+sql.ID+', "'+sql.itemList+'", "'+sql.itemListDone+'");');
        connection.query('INSERT INTO object (ID, itemList, itemListDone) VALUES ('+sql.ID+', "'+sql.itemList+'", "'+sql.itemListDone+'");', function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
    });
});
  


app.delete("/deleteAllItems", (req, res) => {
    //connection.end();
    var sql = req.body;
    connection.query('DELETE FROM object WHERE ID = '+sql.ID+';', function (err, result) {
        if (err) throw err;
        console.log("all items are deleted");
    });
});


/*
// Route to delete a specific todo item
app.delete('/specificToDo/:id', (req, res) => {
    const ID = req.params.id;
    pool.query('DELETE FROM todos WHERE id = ?', [ID], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.sendStatus(204); // No content (success)
    });
  });
*/





process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
});


