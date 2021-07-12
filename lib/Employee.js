class Employee {
    constructor(name, employeeType, id, email) {
        this.name = name;
        this.employeeType = employeeType;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmployeeType() {
        return this.employeeType;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    
}

module.exports = Employee;

