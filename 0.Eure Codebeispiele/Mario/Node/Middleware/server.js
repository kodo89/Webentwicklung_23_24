//Hier kommt dein Webserver der das index.html File zurückliefert

import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    /*res.send("<h1>Hello world 2</h1>"); */
});


app.post("/submit", (req, res) => {
  
  res.status(200).send("Der User " + req.body.username + " hat sich gerade angemeldet");
  
  /*res.sendStatus(200);*/
});







app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

