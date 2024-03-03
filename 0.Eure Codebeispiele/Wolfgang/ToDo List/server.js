import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("static"));

const __dirname = dirname(fileURLToPath(import.meta.url));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

connection.connect((err) => {
  if (err) {
    console.error("Fehler bei der verbindung zur Datenbank:", err);
  } else {
    console.log("Erfolgreich verbunden");
  }
});

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/login.html"));
});

app.get("/index", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/index.html"));
});
app.get("/register", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/regiester.html"));
});






app.get("/validate" , (req, res) => {
    const { username, password } = req.query;
    if (!username || !password) {
        return res.status(400).json({ message: 'Benutzername und Passwort sind erforderlich' });
    }

    try {
        const query = "SELECT * FROM users WHERE username = '" + username+ "' AND password = '"+password+"'";
        if (query) {
            
           return res.redirect('/index');
        } else {
            res.status(401).json({ message: 'Ungültige Anmeldeinformationen' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Interner Serverfehler' });
    }
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
      return res.status(400).json({ message: 'Benutzername und Passwort sind erforderlich' });
  }

  // Hier sollten Sie sicherstellen, dass der Benutzername eindeutig ist, bevor Sie ihn in die Datenbank einfügen.
  // Sie können eine weitere Abfrage ausführen, um zu überprüfen, ob der Benutzer bereits existiert.

  const insertQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
  connection.query(insertQuery, [username, password], (error, results) => {
      if (error) {
          console.error("Fehler beim Einfügen des Benutzers:", error);
          return res.status(500).json({ message: 'Interner Serverfehler' });
      }
      console.log("Benutzer erfolgreich registriert");
      res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
  });
});


app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });