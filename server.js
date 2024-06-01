const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'coffee',
  password: 'suganth@2005',
  database: 'coffee'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Handle form submissions
app.post('/submit', (req, res) => {
  // Retrieve data from the form submission
  const { username, email, password } = req.body;

  // Insert the data into the database
  const sql = 'INSERT INTO data VALUES (?, ?, ?)';
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
