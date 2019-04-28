
var express = require('express');
var mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const bodyparser = require('body-parser');
app.use(cors());
app.use(logger('dev'));
app.use(express.static("./public"));    
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const home = require('./API/routes/home');
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});



app.use('/',home);

//catch 404 
app.use((req,res,next)=>{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})
//catch 500
app.use((req,res,next)=>{
    const err = app.get('env') === 'development'  ?  err : {};
    const status = err.status || 500; 
    res.status(status).json({
        error : {
            message : error.message
        }
    })
})

//module exports
module.exports = app;