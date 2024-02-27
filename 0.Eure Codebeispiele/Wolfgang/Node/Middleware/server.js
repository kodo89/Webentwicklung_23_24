//Hier kommt dein Webserver der das index.html File zurückliefert
import express, { response } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
import axios from "axios";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

/*app.use(checkPasswort)*/

function checkPasswort(req, res, next) {
  if (req.url === "/submit") {
  }
  if (req.body.password === "12345") {
    console.log("Passwort gültig");
    next();
  } else {
    console.log("STOP, passwort nicht gültig");
  }
}

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body.username);
  res.render(_dirname + "/public/ejs.ejs", {
    username: req.body.username,
    password: req.body.password,
  });
  res.sendStatus("Hat geklappt");
});

app.get("/iss", (req, res) => {
  let apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    axios.get(apiUrl).then((response) => {
      const { latitude, longitude } = response.data;
      res.render(_dirname + "/public/ejs.ejs", {
        latitude: latitude,
        longitude: longitude,
      });
    });
  } catch (erro) {
    res.status(500).send("Fehler beim aufruf der api");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/*app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send( req.body.username + req.body.password )
});*/
