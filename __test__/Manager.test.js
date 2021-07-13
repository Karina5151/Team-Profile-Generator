const Manager = require('../lib/Manager.js');

test('Creating an manager', () => {
    const manager = new Manager ('name', 'id', 'email', 'officeNumber');

    expect (typeof(manager)).toBe('object');
});

test('Get office number', () => {
    const manager = new Manager ('name', 'id', 'email', '555-555');

    expect (manager.getofficeNum()).toBe('555-555');
});

test('Get employee type', () => {
    const manager = new Manager ('name', 'id', 'email', '555-555');

    expect (manager.getEmployeeType()).toBe('Manager');
});