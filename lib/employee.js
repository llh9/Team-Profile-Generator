const input = require('input')
const fs = require('fs')

class Employee {

    constructor(name, id, email) {

        this.name = 'none';
        this.id = 'none';
        this.email = 'none';
        this.role = 'Employee';

    }

    

    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}
module.exports = Employee;
