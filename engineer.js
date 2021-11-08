const input = require('input')
const fs = require('fs')
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, github){
        
        super(name, id, email);
        this.name= name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';

        

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
    getGithub(){

        return this.github
    }
    getRole(){

        return this.role;  
    }
}
module.exports = Engineer;
