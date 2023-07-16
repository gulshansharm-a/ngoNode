const url = require('url');
const mysql = require('mysql2');
const http = require('http');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

const server = http.createServer((req, res) => {
  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Preflight request, respond with 200 OK
    res.statusCode = 200;
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const queryParameters = parsedUrl.query;

  if (parsedUrl.pathname === '/student-profile') {
    // Handle GET request with URI parameters
    const ID = queryParameters.studentID;
    const responseData = {
      aadharNumber: "123456789",
      studentName: "Gulshan",
      fatherName: "Rajesh kumar",
      motherName : "Anu",
      gender : "Male",
      DOB : "12/12/2022",
      schoolName : "LpU",
      areaType : "Rural",
      mobile:"9797472911",
      email: "a@b.com",
      villageOrTown: "Bishnah",
      pinCode: "181132",
      district : "jammu",
      state : " j&k ",
      fatherAadharNo: "123456789",
      motherAadharNo: "1234567890",
      fatherPanNo : "123456789",
      enrollDate : "12:12:25",
      agentDetail : "hs ls kjsh lamaj jak ua j akj fjf tesdrtfij  aksjdhf jdhf uasj"
    };
    res.end(JSON.stringify(responseData));
  } else if (parsedUrl.pathname === '/student-profile/add') {
    const ID = queryParameters.studentID;
    const aadharNumber = queryParameters.aadharNumber;
    const studentName = queryParameters.studentName;
    const fatherName = queryParameters.fatherName;
    const motherName = queryParameters.motherName;
    const gender = queryParameters.gender;
    const DOB = queryParameters.DOB;
    const schoolName = queryParameters.schoolName;
    const areaType = queryParameters.areaType;
    const mobile = queryParameters.mobile;
    const email = queryParameters.email;
    const villageOrTown = queryParameters.villageOrTown;
    const pinCode = queryParameters.pinCode;
    const district = queryParameters.district;
    const state = queryParameters.state;
    const fatherAadharNo = queryParameters.fatherAadharNo;
    const motherAadharNo = queryParameters.motherAadharNo;
    const fatherPanNo = queryParameters.fatherPanNo;
    const enrollDate = queryParameters.enrollDate;
    const agentDetail = queryParameters.agentDetail;

    console.log('Inserting data:', {
      ID,
      aadharNumber,
      studentName,
      fatherName,
      motherName,
      gender,
      DOB,
      schoolName,
      areaType,
      mobile,
      email,
      villageOrTown,
      pinCode,
      district,
      state,
      fatherAadharNo,
      motherAadharNo,
      fatherPanNo,
      enrollDate,
      agentDetail
    });

    const insertDataSQL = `
      INSERT INTO Student 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const insertDataParams = [
      ID,
      aadharNumber,
      studentName,
      fatherName,
      motherName,
      gender,
      DOB,
      schoolName,
      areaType,
      mobile,
      email,
      villageOrTown,
      pinCode,
      district,
      state,
      fatherAadharNo,
      motherAadharNo,
      fatherPanNo,
      enrollDate,
      agentDetail
    ];

    connection.query(insertDataSQL, insertDataParams, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Error inserting data' }));
        return;
      }
      console.log('Data inserted successfully');
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Data inserted successfully' }));
    });
  } else {
    // Handle other requests
    res.statusCode = 404; // Not Found
    res.end();
  }
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
