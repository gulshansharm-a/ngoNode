const mysql = require('mysql2');
const http = require('http');
const url = require('url');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

const server = http.createServer((req, res) => {
  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');

  const parsedUrl = url.parse(req.url, true);
  const queryParameters = parsedUrl.query;
  const ID = 1; // Example ID value, replace with the desired ID
  const aadharNumber = queryParameters.aadharNumber || '';
  const studentName = queryParameters.studentName || '';
  const fatherName = queryParameters.fatherName || '';
  const motherName = queryParameters.motherName || '';
  const gender = queryParameters.gender || '';
  const DOB = queryParameters.DOB || '';
  const schoolName = queryParameters.schoolName || '';
  const areaType = queryParameters.areaType || '';
  const mobile = queryParameters.mobile || '';
  const email = queryParameters.email || '';
  const villageOrTown = queryParameters.villageOrTown || '';
  const pinCode = queryParameters.pinCode || '';
  const district = queryParameters.district || '';
  const state = queryParameters.state || '';
  const fatherAadharNo = queryParameters.fatherAadharNo || '';
  const motherAadharNo = queryParameters.motherAadharNo || '';
  const fatherPanNo = queryParameters.fatherPanNo || '';
  const enrollDate = queryParameters.enrollDate || '';
  const agentDetail = queryParameters.agentDetail || '';


});

const port = 8000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});
