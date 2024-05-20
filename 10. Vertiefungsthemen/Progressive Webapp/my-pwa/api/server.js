import express from "express";
import cors from "cors";
import session from "express-session";
import mysql from "mysql";
import bcrypt from "bcrypt";

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(
  session({
    secret: "your_secret_key", // Change this to a secret key of your choice
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure to true if using HTTPS
  })
);

function checkSession(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
}

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

app.post("/loginBasicAuth", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length > 0) {
      const user = results[0];

      try {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          req.session.username = username;
          res.json({ message: "Session created", sessionId: req.sessionID });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } catch (err) {
        console.error("Error comparing passwords:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.status(401).json({ error: "Invalid credential" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length > 0) {
      res.status(401).json({ error: "Username already exists" });
    } else {
      const sql = "INSERT INTO users (username, password) VALUES (?,?)";

      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed password:", hash);
          db.query(sql, [username, hash], async (err, results) => {
            if (err) {
              console.error("Error executing query:", err);
              res.status(500).json({ error: "Internal server errors" });
              return;
            }
            else{
              res.status(200).json({ message: "User signed up successfully" });
            }
          });
        }
      });
    }
  });
});

app.get("/privatearea", checkSession, (req, res) => {
  const username = req.session.username;
  res.json({ message: "Session info", username: username });

});

app.post("/logout", checkSession, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).send('Error destroying session');
    }
    else{
      return res.status(200).send({mesage:"Logout"})
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
