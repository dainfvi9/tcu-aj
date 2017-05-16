
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var schoolSchema = new Schema({
    name: {type:String, required: true},
    address: {type:String, required: true},
    classrooms: [{type: Schema.Types.ObjectId, ref: 'Classroom'}],
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
});
module.exports = mongoose.model('School',schoolSchema);

var classroomSchema = new Schema({
    schoolId: {type: Schema.Types.ObjectId, ref: 'School'},
    grade: String,
    section: String,
    teacherId: {type: Schema.Types.ObjectId, ref: 'User'},
});
module.exports = mongoose.model('Classroom',classroomSchema);

var userSchema = new Schema({
    schoolId: {type: Schema.Types.ObjectId, ref: 'School'},
    firstName: String,
    secondName: String,
    firstLastName: String,
    secondLastName: String,
    email: String,
    type: String,
    active: Boolean,
    classrooms: [{type: Schema.Types.ObjectId, ref: 'Classroom'}],
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
    schoolId: {type: Schema.Types.ObjectId, ref: 'School'},
    classroomId: {type: Schema.Types.ObjectId, ref: 'Classroom'},
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
