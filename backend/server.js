const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sow123$',
  database: 'job_portal',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

app.post('/register', (req, res) => {
  const { role, name, email, mobile, city, companyName, companyEmail, password } = req.body;

  if (role === 'jobseeker') {
    const query = 'INSERT INTO jobseekers (name, email, mobile, city, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, mobile, city, password], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(201).json({ message: 'Jobseeker registered successfully!' });
    });
  } else if (role === 'recruiter') {
    const query = 'INSERT INTO recruiters (companyName, companyEmail, password) VALUES (?, ?, ?)';
    db.query(query, [companyName, companyEmail, password], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(201).json({ message: 'Recruiter registered successfully!' });
    });
  } else {
    res.status(400).json({ error: 'Invalid role' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
