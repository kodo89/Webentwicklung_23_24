//Hier kommt dein Webserver der das index.html File zurückliefert

import bodyParser from "body-parser";
import express, { response } from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";


import morgan from 'morgan';
import axios from "axios";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/issfrontend", (req, res) => {
  res.sendFile(__dirname + "/iss.html");
});


app.use(morgan('combined'));
app.use(logger);
app.use(checkPassword);

function logger(req, res, next){
  console.log(req.body.username)
  next();
}


function checkPassword(req, res, next){
  if(req.url === "/submit"){
    if(req.body.password === "8796"){
      console.log("Password gültig");
      next();
    }else{
    console.log("Stop Password nicht gültig");
    res.sendStatus(401)
    }
  }
  else{
    next()
  }
 }

 app.post("/submit",(req, res) => {
  res.render(__dirname + "/public/example.ejs",
  {
    username: req.body.username, 
    password: req.body.password
  })
})

/*app.post("/submit",(req, res) => {
  console.log(req.body);
  res.status(200).send("Der User " + req.body.username + " hat sich gerade angemeldet")
})*/

app.get("/iss", (req, res) => {
  let yourURL = "https://api.wheretheiss.at/v1/satellites/25544"
  try{
    axios.get(yourURL).then((response) => {
      res.render(__dirname + "/public/iss.ejs",
      {
        latitude: response.data.latitude,
        longitude: response.data.longitude
      })
    });
  }catch{
    send("Fehler beim Aufruf der Api");
  }
});


app.get("/issdata", (req, res) => {
  let yourURL = "https://api.wheretheiss.at/v1/satellites/25544"

  try{
    axios.get(yourURL).then((response) => {

      console.log(response)
      // res.json(data) 
        res.json({
        latitude: response.data.latitude,
        longitude: response.data.longitude
      })
    });
  }catch{
    send("Fehler beim Aufruf der Api");
  }
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
