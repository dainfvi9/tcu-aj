const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Classroom = mongoose.model('Classroom');
var School = mongoose.model('School');

//Get API list
router.post('/create', function (req, res) {
    if (mongoose.connection.readyState == 1) {
        var _classroom = new Classroom(req.body);
        Classroom.create(_classroom, function (err, classroom) {
            if (err) res.send(err);
            else {
                School.findById(user.schoolId, function (err, _school) {
                    if (err) res.send(err);
                    else if (!classroom.schoolId) res.send("No ID was sent");
                    else {
                        _school.teachers.push(_classroom);
                        _school.save();
                    }
                });
                User.findById(user.teacherId, function (err, _user) {
                    if (err) res.send(err);
                    else if (!classroom.schoolId) res.send("No ID was sent");
                    else {
                        _user.teachers.push(_classroom);
                        _user.save();
                    }
                });
            }
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.get('/', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        Classroom.find(function (err, _classrooms) {
            if (err) res.send(err);
            res.json(_classrooms)
        });
    }
    else {
        res.send("Not connected to database");
    }
});

router.get('/:userId', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        Classroom.findById(req.body.userId, function (err, _classroom) {
            if (err) res.send(err);
            else if (!req.params.userId) res.send("No ID was sent");
            res.json(_classroom)
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.post('/delete', function (req, res) {
    console.dir(req.body);
    if (mongoose.connection.readyState == 1) {
        Classroom.findById(req.body.classroomId).remove(function (err) {
            if (err) return res.send(err);
            else if (!req.body.classroomId) return res.send("No ID was sent");
            return res.send("Classroom removed")
        });
    }
    else {
        return res.send("Not connected to database");
    }
});


module.exports = router