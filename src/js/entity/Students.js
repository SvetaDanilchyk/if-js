import {Student} from "./Student.js";

export class Students {
    constructor(studentsData){
        this.students  = [...studentsData];
        
    }

    getInfo() {
    let count = 0;
    let student = [];
    let str = [];


     this.students.forEach((i) => {
        student[count] = new Student(i.firstName, i.lastName, i.admissionYear, i.courseName);       
        count++;
     });

     student.sort((a, b) => a.admissionYear < b.admissionYear ? 1 : -1);

     student.forEach((i) => {
        str[count] = `${i.fullName} - ${i.courseName}, ${i.course} курс`;
        count++;
     });

     return str;
    }
}