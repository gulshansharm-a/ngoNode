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
  } else 
  if (parsedUrl.pathname === '/student-profile/add') {
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS Student (
        ID int NOT NULL PRIMARY KEY,
        aadharNumber VARCHAR(255),
        studentName VARCHAR(255),
        fatherName VARCHAR(255),
        motherName VARCHAR(255),
        gender VARCHAR(255),
        DOB VARCHAR(255),
        schoolName VARCHAR(255),
        areaType VARCHAR(255),
        mobile VARCHAR(255),
        email VARCHAR(255),
        villageOrTown VARCHAR(255),
        pinCode VARCHAR(255),
        district VARCHAR(255),
        state VARCHAR(255),
        fatherAadharNo VARCHAR(255),
        motherAadharNo VARCHAR(255),
        fatherPanNo VARCHAR(255),
        enrollDate VARCHAR(255),
        agentDetail VARCHAR(1055)
      )
    `;

    connection.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating table:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Error creating table' }));
        return;
      }
      console.log('Table created successfully');
    });

    console.log('Inserting data:', { ID, aadharNumber, studentName, /* ... */ });

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
    });

    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Data inserted successfully' }));
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
