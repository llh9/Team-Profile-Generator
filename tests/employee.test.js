const Employee = require('../lib/employee');
const test = require('jest');
const employeeTest = require('../lib/employee');
const name = "Landon"
const id = 00;
const email = "landon@email.com"
const emp = new Employee(name. id, email);
test('Tests all of the properties and methods of the employee class',(Employee) => {
    expect(emp.getRole()).toBe('Employee');
});
