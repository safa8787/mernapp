const express = require('express');
const connectdb = require('./config/connectdb');


//initializing express
const app = express();

require('dotenv').config();

connectdb();
app.use(express.json());
app.use('/contact',require ('./routes/contact'));



port=process.env.PORT;
app.listen(port,(err)=>{ 
    (err)?console.log(err):
    console.log("Server is running on port ")
})