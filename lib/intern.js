const input = require('input')
const fs = require('fs')
const Employee = require('./employee')


class Intern extends Employee {
    constructor(name, id, email, school){
        
        super(name, id, email);
        this.name= name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
        
    }
    
    getName(){

        return this.name;
    }
    getId(){

        return this.id;
    }
    getEmail(){

        return this.email;
    }
    getSchool()
    {
        return this.school;
    }
    getRole(){

        return this.role;  
    }
}
 module.exports = Intern;

