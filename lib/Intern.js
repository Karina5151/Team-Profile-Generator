const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school) {
      // inherited items from parent class
    super(name, "Intern", id, email);
    
    this.school = school;
  }
  getschool() {
    return this.school;
}
}

module.exports = Intern;