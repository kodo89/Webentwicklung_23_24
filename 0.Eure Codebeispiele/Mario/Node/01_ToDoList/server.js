import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

import path from "path";

const app = express();
const port = 3000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Enable CORS for all routes
app.use(cors());
//app.use(bodyParser.json()); --> braucht man eigentlich nicht
app.use(express.json());
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo'
});
connection.connect();

// active User:
let UserID = 0;


app.get("/login", (req,res) => {
  res.sendFile(`${__dirname}/frontend/login.html`)
});


app.get("/getAllTodos", (req,res) => {
  res.sendFile(`${__dirname}/frontend/todoList.html`)
});


app.get("/registration", (req,res) => {
  res.sendFile(`${__dirname}/frontend/resgistration.html`)
});



app.get("/insertNewUserIntoDB", (req, res) => {
  const userName = req.query.userName;
  const password = req.query.password;

  console.log(userName)
  console.log(password)
  // Check if the user already exists
  const checkQuery = `SELECT * FROM objectuser WHERE Name = '${userName}'`;
  connection.query(checkQuery, (error, results) => {
      if (error) {
          res.status(500).send("Internal Server Error");
      } else {
          if (results.length > 0) {
              // User already exists
              console.log("User already exists");
              //res.status(200).json({ action: "redirect", destination: "/registration" });
              //res.status(200).json({ alert: "User already exists" });
              res.redirect("/registration");
              //res.status(409).send("User already exists");
          } else {
              // Insert the new user into the database
              const insertQuery = `INSERT INTO objectuser (Name, Password) VALUES ('${userName}', '${password}')`;
              connection.query(insertQuery, (error, result) => {
                  if (error) {
                      res.status(500).send("Internal Server Error");
                  } else {
                      console.log("1 record inserted");
                      res.redirect("/login");
                  }
              });
          }
      }
  });
});


app.get("/goToToDoList", (req, res) => {
    // Abfragen ob Usereingabe korrekt ist
    var userInput = req.query.username;
    var userPassword = req.query.password;

    const query = `SELECT * from objectuser where Name = '${userInput}' AND Password = '${userPassword}';`

    //console.log(req.query.username) --> Get übergibt einen query
    //ein Post verlangt einen body

    console.log("User: "+ userInput + ", Password: " + userPassword);


    connection.query(query, (error, results) => {
      if(error){
        res.status(500).send("Interner Serverfehler");
      } else {
          console.log('The solution is: ', results);
          try{
            console.log("Result length: " + results.length)
            UserID = results[0].ID;
            if(results.length == 1){
              res.redirect("/getAllTodos");
            }
          } catch (error){
            console.log("User or Password is not valid!")
            //alert("User or Password is not valid! Try again or register!")
            res.redirect("/registration");
          }
      }
    });
});


app.get("/loadDataFromDB", (req, res) => {
  const query  = `SELECT * FROM object WHERE IDuser = ${UserID};`
  //const query  = `SELECT * FROM object WHERE IDuser = 1;`

  //const id = UserID;
  connection.query(query, (error, results) => {
    if(error){
      res.status(500).send("Interner Serverfehler");
    } else {
      res.json(results);
      //console.log('The solution2 is: ', results);
    }
  });
  //connection.end();
});

//Credential

// userId definieren hier!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//let UserID = 1; // ändert sich bei anmeldung, mit einem post oder so // soll am Anfang 0 sein!!!
// funktion zum aktualisieren

// res.redirect("/todos") --> Endpoint von get allTodos --> Endpoint wird erneut aufgerufen --> das schreib ich unten rein wenn ich zb. ein neues Todo in die DB hineingebe
// location.reload --> im frontend geht auch

  
app.post("/insertNewItemIntoDB", (req, res) => {
        var sql = req.body;
        //console.log(sql.itemList);
        const query = 'INSERT INTO object (IDuser, itemList, itemListDone) VALUES ('+UserID+', "'+sql.itemList+'", "false");'

        connection.query(query, function (err, result) {
          if (err){
            throw err
          } else{
            console.log("1 record inserted");
          }
    });
});


app.patch('/updateToDoToDone/:id/:isDone', (req, res) => {
  const ID = req.params.id;
  const isDone = req.params.isDone;

  console.log("************** "+ID)
  console.log("************** "+isDone)

  var query = "";
  if(isDone == "false"){
    query = `UPDATE object SET ItemlistDone = 'true' WHERE ID = ${ID};`
  } else{
    query = `UPDATE object SET ItemlistDone = 'false' WHERE ID = ${ID};`
  }

  connection.query(query, function (err, result) {
    if (err){
      throw err
    } else{
      console.log("1 record was updated");
    }
  });
});



app.patch('/changeItemInTheDB/:id', (req, res) => {
  const ID = req.params.id;
  var sql = req.body.itemList;

  console.log("************** "+sql)
  console.log("************** "+ID)

  var query = `UPDATE object SET ItemlistDone = 'false', itemList = "${sql}" WHERE ID = ${ID};`


  connection.query(query, function (err, result) {
    if (err){
      throw err
    } else{
      console.log("1 record was updated");
    }
  });
});


app.delete('/specificToDo/:id', (req, res) => {
  const ID = req.params.id;
  console.log(ID);

  const query = `DELETE FROM object WHERE ID = ${ID};`

  connection.query(query, function (err, result) {
    if (err){
      throw err
    } else{
      console.log("1 record was deleted");
    }
  });
});


app.delete('/deleteAllItems', (req, res) => {

  const query = `DELETE FROM object where IDuser = ${UserID};`

  connection.query(query, function (err, result) {
    if (err){
      throw err
    } else{
      console.log("all records are deleted");
    }
  });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
});


