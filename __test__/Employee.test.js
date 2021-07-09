const Employee = require('../lib/Employee.js');

test('Creating an employee', () => {
    const employee = new Employee ('name', 'employeeType', 'id', 'email');

    expect (typeof(employee)).toBe('object');
});