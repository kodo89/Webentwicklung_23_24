import express from "express";
import session from "express-session";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("static"));
app.use(session({
  secret: 'Geheimnis', // Ein zufälliger String zur Verschlüsselung von Session-Daten
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
    expires: false // Session-Cookie wird gelöscht, wenn der Browser geschlossen wird
  }
}));

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
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: "Nicht autorisiert" });
  }

  // SQL-Abfrage zum Abrufen der Aufgaben des aktuellen Benutzers aus der Datenbank
  const query = "SELECT * FROM todos WHERE user_id = ?";

  // Ausführen der SQL-Abfrage mit der Benutzer-ID aus der Sitzung
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Fehler beim Abrufen der Aufgaben:", error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }

    // Senden der abgerufenen Aufgaben an die Indexseite zur Anzeige
    res.render(path.join(__dirname, "index"), { username: req.session.username, userId: req.session.userId, tasks: results });
  });
});


app.get("/registrieren", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/registrieren.html"));
});

//Überprüft ob es diesen benutzer gibt und wenn ja werde ich weitergeleitet zur index.html seite

app.get("/validate", (req, res) => {
  const { username, password } = req.query;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Benutzername und Passwort sind erforderlich" });
  }

  const query =
    "SELECT * FROM users WHERE username = ? AND password = ?";
  
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Fehler bei der Abfrage des Benutzers:", error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }
    
    if (results.length === 1) {
      const userId = results[0].id;
      const username = results[0].username;

      // Neue Session für den Benutzer erstellen
      req.session.regenerate((err) => {
        if (err) {
          console.error("Fehler beim Erstellen einer neuen Sitzung:", err);
          return res.status(500).json({ message: "Interner Serverfehler" });
        }
        // Sitzungsdaten für den Benutzer setzen
        req.session.userId = userId;
        req.session.username = username;
        return res.redirect("/index");
      });
    } else {
      // Kein Benutzer mit den angegebenen Anmeldeinformationen gefunden
      return res.status(401).json({ message: "Ungültige Anmeldeinformationen" });
    }
  });
});

app.get("/index", (req, res) => {
  // Überprüfen, ob der Benutzer angemeldet ist
  if (!req.session.userId || !req.session.username) {
    return res.status(401).json({ message: "Nicht autorisiert" });
  }
  res.render(path.join(__dirname, "index"), { username: req.session.username, userId: req.session.userId });
});


// Middleware zum Hinzufügen einer Aufgabe in die Datenbank
app.post("/task", (req, res) => {
  const { user_id, task, priority, due_date } = req.body;

  // Überprüfen, ob alle erforderlichen Felder vorhanden sind
  if (!task || !priority) {
    return res.status(400).json({ message: "Bitte füllen Sie alle erforderlichen Felder aus." });
  }

  // SQL-Abfrage zum Einfügen der Aufgabe in die Datenbank
  const query = "INSERT INTO todos (user_id, task, priority, due_date) VALUES (?, ?, ?, ?)";

  // Ausführen der SQL-Abfrage mit den Werten aus dem Formular
  connection.query(query, [user_id, task, priority, due_date], (error, results) => {
    if (error) {
      console.error("Fehler beim Hinzufügen der Aufgabe:", error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }

    // Erfolgreich eingefügt
    return res.redirect("/index");
    
  });
});

app.post("/deleteTask", (req, res) => {
  const taskName = req.body.taskName;

  // SQL-Abfrage zum Löschen der Aufgabe mit dem angegebenen Namen
  const query = "DELETE FROM todos WHERE task = ?";

  // Ausführen der SQL-Abfrage mit dem Aufgaben-Namen
  connection.query(query, [taskName], (error, results) => {
      if (error) {
          console.error("Fehler beim Löschen der Aufgabe:", error);
          return res.status(500).json({ message: "Interner Serverfehler" });
      }

      // Erfolgreich gelöscht
      return res.redirect("/index");
  });
});




app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
