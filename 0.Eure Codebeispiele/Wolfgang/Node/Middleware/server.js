//Hier kommt dein Webserver der das index.html File zurückliefert

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
  });


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send( req.body.username + req.body.password )
});

