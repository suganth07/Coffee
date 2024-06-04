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

// Handle registration form submissions
app.post('/register', (req, res) => {
  const { username, email, password, confirm_password, phone} = req.body;

  // Check if the password and confirm_password match
  if (password !== confirm_password) {
      res.status(400).send('Passwords do not match');
      return;
  }

  // Check if the phone number is 10 digits
  if (!/^\d{10}$/.test(phone)) {
      res.redirect('/index?registration=failed');
      return;
  }

  const sql = 'INSERT INTO data VALUES (?, ?, ?, ?,NULL,NULL,NULL)';
  connection.query(sql, [username, email, password, phone], (err, result) => {
      if (err) {
          console.error('Error inserting data into the database:', err);
          res.status(500).send('Internal Server Error');
          return;
      }
      console.log('Data inserted successfully');
      res.redirect('/index?registration=success');
  });
});

// Handle login form submissions
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  const sql = 'SELECT * FROM data WHERE name = ? AND password = ?';
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      res.redirect('/index?login=success');
    } else {
      res.redirect('/index?login=failed');
    }
  });
});

// Serve the index page
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.post('/send-message', (req, res) => {
  const { email, datetime } = req.body;

  // Split the datetime string into date and time components
  const [date, time] = datetime.split('T');

  // Query to check if the name exists in the table
  const checkSql = 'SELECT * FROM data WHERE email = ?';
  connection.query(checkSql, [email], (checkErr, results) => {
    if (checkErr) {
      console.error('Error querying the database:', checkErr);
      res.status(500).send('Internal Server Error');
      return;
    }
    
    if (results.length > 0) {
      // If name exists, update the reservation details
      const updateSql = 'UPDATE data SET Resname = ?, resdate = ?, ResTime = ? WHERE email = ?';
      connection.query(updateSql, [email, date, time, email], (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Error while reserving table', updateErr);
          res.status(500).send('Internal Server Error');
          return;
        }
        console.log('Table Reserved successfully');
        res.redirect('/index?Reserve=success');
      });
    } else {
        res.redirect('/index?user=notfound')
    }
  });
});