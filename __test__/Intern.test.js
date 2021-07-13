const Intern = require('../lib/Intern.js');

test('Creating an intern', () => {
    const intern = new Intern ('name', 'id', 'email', 'school');

    expect (typeof(intern)).toBe('object');
});

test('Get school name', () => {
    const intern = new Intern ('name', 'id', 'email', 'univeristyABC');

    expect (intern.getschool()).toBe('univeristyABC');
});

test('Get employee type', () => {
    const intern = new Intern ('name', 'id', 'email', 'univeristyABC');

    expect (intern.getEmployeeType()).toBe('Intern');
});