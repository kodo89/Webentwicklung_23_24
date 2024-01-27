//Hier kommt dein Webserver der das index.html File zurückliefert

import bodyParser from "body-parser";
import express, { response } from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(morgan("combined"));
//app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/iss", (req, res) => {
  const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    axios.get(apiURL).then((response) => {
      console.log("iss");
      res.render(`${__dirname}/public/iss.ejs`, {
        latitude: response.data.latitude,
        longitude: response.data.longitude
      });
    })
  } catch(err) {
    res.status(500).send("Error calling API.");
  }
  
});

app.get("/issFE", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/issFE.html`);
})

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

// app.post("/submit", (req, res) => {
//   console.log(req.body);
//   res.send(`Der User ${req.body.username} hat sich gerade angemeldet.`);
// });

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render(`${__dirname}/public/index.ejs`,
  {
    username: req.body.username,
    password: req.body.password
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

function checkPassword(req, res, next) {
  if (req.url === "/submit") {
    if (req.body.password === "test") {
      res.send(`Hallo ${req.body.username}!`);
      next();
    } else {
      res.send("Passwort ungültig!");
    }
  } else {
    next();
  }
}
