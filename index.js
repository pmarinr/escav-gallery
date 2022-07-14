require('dotenv').config()
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
//create an express app
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const routes = require('./routes/routes');

// use the express-static middleware
app.use(express.static("public"))
app.use(express.json());
app.use('/api', routes)
// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(port, 
	() => console.log(`Server is running at port ${port}`));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})