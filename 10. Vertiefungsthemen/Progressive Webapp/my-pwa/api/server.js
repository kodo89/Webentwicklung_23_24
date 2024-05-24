import express from "express";
import cors from "cors";
import session from "express-session";
import mysql from "mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 5000;

const jwtSecret = "your_jwt_secret_key";

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key", 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

function checkSession(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
}

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  console.log(token)
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "No token provided" });
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
      res.status(401).json({ error: "Invalid credentials" });
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
              res.status(500).json({ error: "Internal server error" });
              return;
            } else {
              res.status(200).json({ message: "User signed up successfully" });
            }
          });
        }
      });
    }
  });
});

app.post("/loginTokenAuth", (req, res) => {
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
          const token = jwt.sign({ username: username }, jwtSecret, { expiresIn: '1h' });
          res.json({ message: "Token generated", token: token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } catch (err) {
        console.error("Error comparing passwords:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

app.get("/privatearea", checkSession, (req, res) => {
  const username = req.session.username;
  res.json({ message: "Session info", username: username });
});

app.get("/privateareaToken", verifyToken, (req, res) => {
  const username = req.username;
  res.json({ message: "Token info", username: username });
});

app.post("/logout", checkSession, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).send('Error destroying session');
    } else {
      return res.status(200).send({ message: "Logout" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
