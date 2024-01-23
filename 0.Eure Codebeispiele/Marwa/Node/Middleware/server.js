//Hier kommt dein Webserver der das index.html File zurückliefert

import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended:true}))


app.post("/submit",(req, res) => {
  res.status(200).send("User " + req.body.username + " hat sich gerade angemeldet")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

