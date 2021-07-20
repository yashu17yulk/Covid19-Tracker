const express = require('express');
const mongoose = require('mongoose');

//When we send the request to server for fetching the data
//then we get some error related to HTTp server reponse which doen't allow to provide the data 
//due to the request send by diff domain , so we need to add CORS
//steps to add cors : https://www.positronx.io/express-cors-tutorial/
//1.install CORS - npm install cors --save
//then add line no 9,18-24
const cors = require('cors');

 
const userRouterLink = require('./router/userRoute');
const RouterLink = require('./router/Route');
//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
// Mongoose supports both promises and callbacks.
const  app = express();


app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(4100,()=>{
    console.log('Server Started!');
});
 
app.use(express.json());

app.use('/users',userRouterLink);
app.use('/users',RouterLink);

////connectin with mongodb
const dbUrl = "mongodb://localhost/userdb";
mongoose.connect(dbUrl,{ useNewUrlParser: true ,useUnifiedTopology: true , useCreateIndex: true});

const con =  mongoose.connection;

con.on('open',()=>{
    console.log('Connection Established !');
});
