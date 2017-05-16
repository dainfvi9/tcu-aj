const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var School = mongoose.model('School');

//Get API list
router.post('/create', function (req, res) {
    if (mongoose.connection.readyState == 1) {
        var _school = new School(req.body);
        _school.save(function (err, callback) {
            if (err) res.send(err);
            res.json(callback);
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.get('/', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        School.find(function (err, _schools) {
            if (err) res.send(err);
            res.json(_schools)
        });
    }
    else {
        res.send("Not connected to database");
    }
});

router.get('/:schoolId', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        School.findById(req.params.schoolId, function (err, _school) {
            if (err) res.send(err);
            else if (!req.params.schoolId) res.send("No ID was sent");
            res.json(_school)
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.post('/delete', function (req, res) {
    console.dir(req.body);
    if (mongoose.connection.readyState == 1) {
        School.findById(req.body.schoolId).remove(function (err) {
            if (err) return res.send(err);
            else if (!req.body.schoolId) return res.send("No ID was sent");
            return res.send("School removed")
        });
    }
    else {
        return res.send("Not connected to database");
    }
});


module.exports = router