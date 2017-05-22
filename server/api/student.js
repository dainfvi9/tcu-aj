const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var School = mongoose.model('School');
var Classroom = mongoose.model('Classroom');

//Get API list
router.post('/create', function (req, res) {
    if (mongoose.connection.readyState == 1) {
        var _student = new Student(req.body);
        Student.create(_student, function (err, student) {
            if (err) res.send(err);
            School.findById(student.schoolId, function (err, _school) {
                if (err) res.send(err);
                else if (!student.schoolId) res.send("No ID was sent");
                else {
                    _school.students.push(_student);
                    _school.save();
                }
            });
            Classroom.findById(user.schoolId, function (err, _classroom) {
                if (err) res.send(err);
                else if (!student.schoolId) res.send("No ID was sent");
                else {
                    _classroom.students.push(_student);
                    _classroom.save();
                }
            });
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.get('/', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        Student.find(function (err, _students) {
            if (err) res.send(err);
            res.json(_students)
        });
    }
    else {
        res.send("Not connected to database");
    }
});

router.get('/:StudentId', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        Student.findById(req.body.studentId, function (err, _student) {
            if (err) res.send(err);
            else if (!req.params.studentId) res.send("No ID was sent");
            res.json(_student)
        });
    }
    else {
        res.send("Not connected to database");
    }
});


router.post('/delete', function (req, res) {
    console.dir(req.body);
    if (mongoose.connection.readyState == 1) {
        Student.findById(req.body.studentId).remove(function (err) {
            if (err) return res.send(err);
            else if (!req.body.studentId) return res.send("No ID was sent");
            return res.send("Student removed")
        });
    }
    else {
        return res.send("Not connected to database");
    }
});


module.exports = router;