const Engineer = require('../lib/Engineer.js');

test('Creating an engineer', () => {
    const engineer = new Engineer ('name', 'id', 'email', 'gitHub');

    expect (typeof(engineer)).toBe('object');
});

test('Get GitHub account', () => {
    const engineer = new Engineer ('name', 'id', 'email', 'joeSmoe');

    expect (engineer.getgitHub()).toBe('joeSmoe');
});

test('Get employee type', () => {
    const engineer = new Engineer ('name', 'id', 'email', 'joeSmoe');

    expect (engineer.getEmployeeType()).toBe('Engineer');
});