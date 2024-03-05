import express from "express";
import mysql from "mysql";
import path from "path";


import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;


app.use(express.urlencode());
app.use(express.json());
app.use(express.static("public"));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

db.connect((err) => {
    if(err){
      console.error("Fehler bei der Verbindung zur Datenbank:", err);
    } else{
      console.log("Erfolgreich mit der Datenbank verbunden");
    }
  });

//Endpoint to fetch all todos
app.post("/credentials", (req, res) => {

});

//Endpoint to login
app.get("/login", (req, res)=> {
    
})