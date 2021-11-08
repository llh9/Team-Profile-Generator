const input = require('input')
const fs = require('fs')
const Employee = require('./employee')
const choices = ['Engineer', 'Intern'];
var next = "";
var newhire = '';
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        
        super(name, id, email, officeNumber);
        this.name= name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'manager';
        
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
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return this.role;  
    }
}
module.exports = Manager;
