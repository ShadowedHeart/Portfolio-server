// // fileName : server.js 
// // Example using the http module
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response headers
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     // Write the response content
//     res.write('<h1>Hello, Node.js HTTP Server!</h1>');
//     res.end();
// });

// // Specify the port to listen on
// const port = 3000;

// // Start the server
// server.listen(port, () => {
//     console.log(`Node.js HTTP server is running on port ${port}`);
// });

//importing cors

const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
app.use(cors())

// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const dataRoute = require('./routes/data');
const projectRoute = require('./routes/data');

// Use routes
app.use('/users', usersRoute);
app.use('/products', productsRoute);
app.use('/userData', dataRoute);



app.get('/', (req, res)=>{ //root url
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello from server</h1>");
});


const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, (error) => {
  if(!error)
    console.log("Server is Successfully Running, and App is listening on port "+ PORT)
  else 
    console.log("Error occurred, server can't start", error);
}
);