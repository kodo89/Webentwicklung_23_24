//Hier kommt dein Webserver der das index.html File zurückliefert

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
  });


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

