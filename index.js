const input = require('input')
const fs = require('fs')
const Team = require('./team')
const Employee = require('./employee')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')

let count = 0;
const choices = ['Engineer', 'Intern', 'Done'];
const roles = ['Manager', 'Engineer', 'Inter', 'Employee']
let teamArray = [];

async function managerInformation() {
    const name = await input.text(
      'What is your name?', 
      { default: 'Fred' }
    );
    const id = await input.text(
        'What is your id?', 
        { default: `0${count}` }
    );
    const email = await input.text(
        'What is your email?', 
        { default: 'fred@gmail.com' }
    );
    const officeNumber = await input.text(
        'What is your Office number?', 
        { default: '00' }
    );
    const role = await input.select(
        'What is your role?', roles, 
        { default: 'Employee' }
    );
    const next = await input.select(
        'Who will you hire next?', choices, 
        { default: 'Engineer' }
    );
    
    let mgrArray = [name, id, email, role, officeNumber];
    console.log(`Team Member: ${mgrArray}`);
    teamArray.push(mgrArray);
    console.log(`Team: ${teamArray}`);

    if(next == 'Engineer'){
        count++;
        console.log(`Team Size: ${count}`);
        engineerInformation();
    }
    if(next == 'Intern'){
        count++;
        console.log(`Team Size: ${count}`);
        internInformation();
    }
    if(next == 'Done'){
        console.log(teamArray);
        renderTeam();
        setTimeout(runTmFile(), 7000);
        return;
    }
}

async function engineerInformation() {
    const name = await input.text(
      'What is your name?', 
      { default: 'Eddie' }
    );
    const id = await input.text(
        'What is your id?', 
        { default: `0${count}` }
    );
    const email = await input.text(
        'What is your email?', 
        { default: 'Ed@gmail.com' }
    );
    const github = await input.text(
        'What is your github?', 
        { default: '@github' }
    );
    const role = await input.select(
        'What is your role?', roles, 
        { default: 'Employee' }
    );
    const next = await input.select(
        'Who will you hire next?', choices, 
        { default: 'Engineer' }
    );

    let engArray = [name, id, email, role, github];
    console.log(`Team Member: ${engArray}`);
    teamArray.push(engArray);
    console.log(`Team: ${teamArray}`);

    if(next == 'Engineer'){
        count++;
        console.log(`Team Size: ${count}`);
        engineerInformation();
    }
    if(next == 'Intern'){
        count++;
        console.log(`Team Size: ${count}`);
        internInformation();
    }
    if(next == 'Done'){
        console.log(teamArray);
        renderTeam();
        setTimeout(runTmFile(), 7000);
        return;
    }
}

async function internInformation() {
    const name = await input.text(
      'What is your name?', 
      { default: 'Frank' }
    );
    const id = await input.text(
        'What is your id?', 
        { default: `0${count}` }
    );
    const email = await input.text(
        'What is your email?', 
        { default: 'Frank@gmail.com' }
    );
      const school = await input.text(
        'What is your school?', 
        { default: 'OSU' }
    );
    const role = await input.select(
        'What is your role?', roles, 
        { default: 'Employee' }
    );
    const next = await input.select(
        'Who will you hire next?', choices, 
        { default: 'Engineer' }
    );

    let intArray = [name, id, email, role, school];
    console.log(`Team Member: ${intArray}`);
    teamArray.push(intArray);
    console.log(`Team: ${teamArray}`);

    if(next == 'Engineer'){
        count++;
        console.log(`Team Size: ${count}`);
        engineerInformation();
    }
    if(next == 'Intern'){
        count++;
        console.log(`Team Size: ${count}`);
        internInformation();
    }
    if(next == 'Done'){
        console.log(teamArray);
        renderTeam();
        setTimeout(runTmFile(), 7000);
        return;
    }
}

async function renderTeam() {
    fs.appendFile('index.js', 
    // `const input = require('input');
    // \nconst fs = require('fs');
    // \nconst Employee = require('./employee');
    // \nconst Manager = require('./manager');
    // \nconst Engineer = require('./engineer');
    // \nconst Intern = require('./intern');
    `
    \nfunction runTmFile(){
        \nlet count = ${count};
        \n
        \nlet Team_Array = ${teamArray};
        \n
        \nfor(var i = 0; i < count; i++) {
            \nif(Team_Array[i][3] == 'Manager'){ 
            \nconst employee = new Manager(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            \n } 
            \nif(Team_Array[i][3] == 'Engineer'){ 
            \nconst employee = new Engineer(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            \n }
            \nif(Team_Array[i][3] == 'Intern'){ 
            \nconst employee = new Intern(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            \n }  
        \n}console.log('team file executing')
    \n}runTmFile();`
    ,`utf-8`, 
    function (error) {    
        error ? console.error(error) : console.log("Succesfully wrote the file!");
    }
    )
}

managerInformation();   

    
function runTmFile(){
        
let count = 2;
        

        
let Team_Array = Fred,00,fred@gmail.com,Manager,00,Eddie,01,Ed@gmail.com,Engineer,@github,Frank,02,Frank@gmail.com,Inter,OSU;
        

        
for(var i = 0; i < count; i++) {
            
if(Team_Array[i][3] == 'Manager'){ 
            
const employee = new Manager(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            
 } 
            
if(Team_Array[i][3] == 'Engineer'){ 
            
const employee = new Engineer(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            
 }
            
if(Team_Array[i][3] == 'Intern'){ 
            
const employee = new Intern(Team_Array[i][0], Team_Array[i][1], Team_Array[i][2], Team_Array[i][4]);
            
 }  
        
}console.log('team file executing')
    
}runTmFile();