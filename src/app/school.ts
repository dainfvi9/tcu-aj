import {Classroom} from './classroom';
import {User} from './user';
import {Student} from './student';

export class School {
    id: String;
    name: String;
    address: String;
    classrooms: [String];
    teachers: [String];
    students: [String];
}
