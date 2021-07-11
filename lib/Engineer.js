const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
      // inherited items from parent class
    super(name, "engineer", id, email);
    
    this.gitHub = gitHub;
  }
  getgitHub() {
    return this.gitHub;
}
}

module.exports = Engineer;