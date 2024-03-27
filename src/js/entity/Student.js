import { User} from "./User.js";

export class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {        
        const currentYear = new Date().getFullYear();
        const number = currentYear - this.admissionYear;
        return number;
    }

}