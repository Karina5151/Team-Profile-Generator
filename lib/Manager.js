const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
      // inherited items from parent class
    super(name, "manager", id, email);
    
    this.officeNum = officeNum;
  }
  getofficeNum() {
    return this.officeNum;
}
}

module.exports = Manager;