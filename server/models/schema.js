
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var schoolSchema = new Schema({
    name: {type:String, required: true},
    address: {type:String, required: true},
    classrooms: [{type: Schema.Types.ObjectId, ref: 'Classroom'}],
    teachers: [{type: Schema.Types.ObjectId, ref: 'Teacher'}],
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
});
module.exports = mongoose.model('School',schoolSchema);

var classroomSchema = new Schema({
    schoolId: {type: Number, ref: 'School'},
    grade: String,
    section: String,
    teacher: String,
});
module.exports = mongoose.model('Classroom',classroomSchema);

var userSchema = new Schema({
    schoolId: {type: Number, ref: 'School'},
    firsName: String,
    secondName: String,
    firstlastName: String,
    secondLastName: String,
    email: String,
    type: String,
    active: Boolean
});
module.exports = mongoose.model('User',userSchema);

var attendanceSchema = new Schema({
    date: Date,
    present: Boolean
});

var noteSchema = new Schema({
    date: Date,
    text: String
});

var studentSchema = new Schema({
    schoolId: {type: Number, ref: 'School'},
    classroomId: {type: Number, ref: 'Classroom'},
    firsName: String,
    secondName: String,
    firstlastName: String,
    secondLastName: String,
    lastClass: Date,
    risk: String,
    attendanceRecord: [attendanceSchema],
    notes: [noteSchema]
})
module.exports = mongoose.model('Student',studentSchema);
