const http = require('http');
const url = require('url');

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
  } else {
    // Handle other requests
    res.statusCode = 404; // Not Found
    res.end();
  }
});

// Set the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
