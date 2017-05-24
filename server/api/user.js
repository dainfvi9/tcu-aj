const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var School = mongoose.model('School');

//Get API list
router.post('/create', function (req, res) {
    if (mongoose.connection.readyState == 1) {
        var _user = new User(req.body);
        _user.save(function (err, callback) {
            if (err) res.send(err);
            else if(req.body.type == 'TEACHER'){
                parent = School.findById(req.body.schoolId, function (err, _school) {
                    if (err) res.send(err);
                    else if (!req.body.schoolId) res.send("No ID was sent");
                    else{
                        _school.teachers.push(_user);
                        _school.save();
                        res.json(callback);
                    }
                });
            }
            else res.json(callback);
        });       
    }
    else {
        res.send("Not connected to database");
    }
});


router.get('/', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        User.find(function (err, _users) {
            if (err) res.send(err);
            res.json(_users)
        });
    }
    else {
        res.send("Not connected to database");
    }
});

router.get('/:userId', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        User.findById(req.body.userId, function (err, _user) {
            if (err) res.send(err);
            else if (!req.params.userId) res.send("No ID was sent");
            res.json(_user)
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.post('/delete', function (req, res) {
    console.dir(req.body);
    if (mongoose.connection.readyState == 1) {
        User.findById(req.body.userId).remove(function (err) {
            if (err) return res.send(err);
            else if (!req.body.userId) return res.send("No ID was sent");
            return res.send("User removed")
        });
    }
    else {
        return res.send("Not connected to database");
    }
});


module.exports = router