const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var School = mongoose.model('School');

//Get API list
router.post('/', function(req,res){
    var _school = new School(req.body);
    _school.save(function(err, callback){
        if(err) res.send(err);
        res.json(callback);
    });
});

router.get('/', (req,res)=>{
    res.send('api schools');
});

module.exports = router