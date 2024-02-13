//Hier kommt dein Webserver der das index.html File zurückliefert

import express, { response } from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
import axios from "axios";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined'));
app.use(logger);
app.use(checkPassword);

function logger(req, res, next){
  console.log(req.body.username);
  next();
/*next() leitet automatisch an nächsten Endpoint weiter*/
};



function checkPassword(req, res, next){
  if (req.url === "/submit"){
    if(req.body.password === "Password123"){
      console.log("Passwort gültig");
      next();
    } else{
      console.log("Stop - Passwort nicht gültig");
      res.sendStatus(401);
    }
  } else{
    next();
  }
}







app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    /*res.send("<h1>Hello world 2</h1>"); */
});


app.get("/issfrontend", (req, res) => {
  res.sendFile(__dirname + "/public/newISS.html");
  /*res.send("<h1>Hello world 2</h1>"); */
});




app.get("/iss", (req, res) => {
  let yourUrl = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    axios.get(yourUrl).then((response) => {
    /*res.status(200).send("get data: "+response.data);*/
    res.render(__dirname + "/public/iss.ejs",
    {
      latitude: response.data.latitude,
      longitude: response.data.longitude
    })
    });
  } catch (error){
    res.status(500).send("Fehler beim Aufruf der API");
  }
});


app.get("/issdata", (req, res) =>{
  let yourUrl = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    axios.get(yourUrl).then((response) => {
    /*res.status(200).send("get data: "+response.data);*/
    console.log(response.data)
      
    
    res.json( {
      latitude: response.data.latitude,
      longitude: response.data.longitude
    });
  
    });
  } catch (error){
    res.status(500).send("Fehler beim Aufruf der API");
  }


})

/*
app.get("/issdata", (req, res) => {
  const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    axios.get(apiURL).then((response) => {
      console.log("iss");
      res.json({
        latitude: response.data.latitude,
        longitude: response.data.longitude
      });
    })
  } catch(err) {
    res.status(500).send("Error calling API.");
  }
})
*/










/*
app.post("/submit", (req, res) => {
    
    res.status(200).send("Der User " + req.body.username + " hat sich gerade angemeldet");
    console.log(req.body);
  
});
*/

    /*res.sendStatus(200);
    body ist ein JSON file und über dieses JSON file kann man auf zb. Username zugreifen
    */


    /*ejs: ...*/
    
  app.post("/submit", (req, res) => {
      console.log("test")
      res.render(__dirname + "/public/index.ejs",
      {
        username: req.body.username,
        password: req.body.password
      })
      console.log(req.body);
  });





app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

