'use strict';

//Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Connect MongoDB
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://oscar:oscar@ds127101.mlab.com:27101/tcu_test', function(err){
    if(err) throw err;
    console.log('Connected to database!');
});


//Load models
var models = require('./server/models/schema');

//API routes
const schoolApi = require('./server/api/school');
const userApi = require('./server/api/user');

const app = express();

//Parser POST data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Path to dist
app.use(express.static(path.join(__dirname,'dist')));

//Enable CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();    
});

//Use api routes
app.use('/api/school',schoolApi);
app.use('/api/user',userApi);

//Other routes to index
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

//Get port for express
const port = process.env.PORT || '9841';
app.set('port',port);

//Create server
const server = http.createServer(app);

//Set listen port 
server.listen(port,'0.0.0.0',() => console.log('API running on localhost: '+port));

