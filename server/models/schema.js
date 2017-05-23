
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var schoolSchema = new Schema({
    name: {type:String, required: true, unique: true},
    address: {type:String, required: true},
    classrooms: [{type: Schema.Types.ObjectId, ref: 'Classroom'}],
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
});
module.exports = mongoose.model('School',schoolSchema);

var classroomSchema = new Schema({
    schoolId: {type: Schema.Types.ObjectId, ref: 'School', required: true},
    grade: {type:String, required: true},
    section: {type:String, required: true},
    teacherId: {type: Schema.Types.ObjectId, ref: 'User'},
});
module.exports = mongoose.model('Classroom',classroomSchema);

var userSchema = new Schema({
    schoolId: {type: Schema.Types.ObjectId, ref: 'School', required: true},
    firstName: {type:String, required: true},
    secondName: {type:String, required: true},
    firstLastName: {type:String, required: true},
    secondLastName: {type:String, required: true},
    email: {type:String, required: true},
    type: {type:String, required: true},
    active: {type:Boolean, required: true},
    classrooms: [{type: Schema.Types.ObjectId, ref: 'Classroom'}],
    password: {type:String, required: true},
});
module.exports = mongoose.model('User',userSchema);

var attendanceSchema = new Schema({
    date: {type:Date, required: true},
    present: {type:Boolean, required: true},
});

var noteSchema = new Schema({
    date: {type:Date, required: true},
    text: {type:String, required: true},
});

var studentSchema = new Schema({
    schoolId: {type: Schema.Types.ObjectId, ref: 'School'},
    classroomId: {type: Schema.Types.ObjectId, ref: 'Classroom'},
    firsName: {type:String, required: true},
    secondName: {type:String, required: true},
    firstlastName: {type:String, required: true},
    secondLastName: {type:String, required: true},
    lastClass: {type:Date, default: new Date(2000,01,01)},
    risk: {type:String, required: true},
    attendanceRecord: [attendanceSchema],
    notes: [noteSchema]
})
module.exports = mongoose.model('Student',studentSchema);
