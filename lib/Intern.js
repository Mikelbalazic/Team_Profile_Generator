const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, schoolName) {
        super(name, id, email);
        this.schoolName = schoolName;
    }
    
    getSchoolName(){
        return this.schoolName;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;