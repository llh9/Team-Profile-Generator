const input = require('input')
const fs = require('fs')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let count = 0;
const choices = ['Engineer', 'Intern', 'Done'];
const roles = ['Manager', 'Engineer', 'Intern']
let teamArray = [];
var Team = [];



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
        { default: 'Manager' }
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
        count++;
        console.log(teamArray);
        renderTeam();
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
        { default: 'Engineer' }
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
        count++;
        console.log(teamArray);
        renderTeam();
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
        { default: 'Intern' }
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
        count++;
        console.log(teamArray);
        renderTeam();
    }
}

function renderTeam(){

    console.log('Team build executing...');
    for(let i = 0; i < count; i++) {
        console.log(count);
        console.log(i);
        if(teamArray[i][3] == 'Manager'){ 
            let employee = new Manager(teamArray[i][0], teamArray[i][1], teamArray[i][2], teamArray[i][4]);
            console.log(employee);
            Team.push(employee);
            distributeManager(employee);

        } 
        if(teamArray[i][3] == 'Engineer'){ 
            let employee = new Engineer(teamArray[i][0], teamArray[i][1], teamArray[i][2], teamArray[i][4]);
            console.log(employee);
            Team.push(employee);
            distributeEngineer(employee);
        }
        if(teamArray[i][3] == 'Intern'){ 
            let employee = new Intern(teamArray[i][0], teamArray[i][1], teamArray[i][2], teamArray[i][4]);
            console.log(employee);
            Team.push(employee);
            distributeIntern(employee);
        }  
    }
    console.log('Team build completed!');
    console.log('Here it is');
    console.log(Team);
    //generateProfiles()
}

// 

async function distributeManager(Manager) {
    fs.appendFile('./script.js', 
    `var mgrCard = $('<div>');    //card
    var mgrImg = $('<img>');     //card-img-top
    var mgrCBody = $('<div>');   //card-body
    var mgrName = $('<h5>');     //card-title
    var mgrRole = $('<p>');      //card-text
    var mgrNfo = $('<ul>');      //list-group list-group-flush
    var mgrId = $('<li>');       //list-group-item
    var mgrEmail = $('<li>');    //list-group-item
    var mgrOffNum = $('<li>');   //list-group-item
    
    mgrCard.attr('class','card');
    mgrCard.attr('style', 'width: 18rem;')
    mgrImg.addClass('card-img-top');
    mgrImg.attr('alt', 'PIC');
    mgrImg.attr('src', '../assets/images/manager.png');
    mgrCBody.addClass('card-Body');
    mgrName.addClass('card-title');
    mgrRole.addClass('card-text');
    mgrNfo.addClass('list-group list-group-flush');
    mgrId.addClass('list-group-item');
    mgrEmail.addClass('list-group-item');
    mgrOffNum.addClass('list-group-item');
    
    
    mgrName.text('${Manager.getName()}'); 
    mgrRole.text('${Manager.getRole()}');
    mgrId.text('${Manager.getId()}');
    mgrEmail.text('${Manager.getEmail()}');
    mgrOffNum.text('${Manager.getOfficeNumber()}');
    
    var main = $('#main');
    main.append(mgrCard);
    mgrCard.append(mgrImg);
    mgrCard.append(mgrCBody);
    mgrCard.append(mgrNfo);
    mgrCBody.append(mgrName);
    mgrCBody.append(mgrRole);
    mgrNfo.append(mgrId);
    mgrNfo.append(mgrEmail);
    mgrNfo.append(mgrOffNum);`
    ,`utf-8`, 
    function (error) {    
        error ? console.error(error) : console.log("Succesfully generated Manager profile !");
    }
    )
}

async function distributeEngineer(Engineer) {
    fs.appendFile('./script.js', 
    `var Card = $('<div>');    //card
    var Img = $('<img>');     //card-img-top
    var CBody = $('<div>');   //card-body
    var Name = $('<h5>');     //card-title
    var Role = $('<p>');      //card-text
    var Nfo = $('<ul>');      //list-group list-group-flush
    var Id = $('<li>');       //list-group-item
    var Email = $('<li>');    //list-group-item
    var Github = $('<li>');   //list-group-item
    
    Card.attr('class','card');
    Card.attr('style', 'width: 18rem;')
    Img.addClass('card-img-top');
    Img.attr('alt', 'PIC');
    Img.attr('src', '../assets/images/engineer.png');
    CBody.addClass('card-Body');
    Name.addClass('card-title');
    Role.addClass('card-text');
    Nfo.addClass('list-group list-group-flush');
    Id.addClass('list-group-item');
    Email.addClass('list-group-item');
    Github.addClass('list-group-item');
    
    
    Name.text('${Engineer.getName()}'); 
    Role.text('${Engineer.getRole()}');
    Id.text('${Engineer.getId()}');
    Email.text('${Engineer.getEmail()}');
    Github.text('${Engineer.getGithub()}');
    
    var main = $('#main');
    main.append(Card);
    Card.append(Img);
    Card.append(CBody);
    Card.append(Nfo);
    CBody.append(Name);
    CBody.append(Role);
    Nfo.append(Id);
    Nfo.append(Email);
    Nfo.append(Github);`
    ,`utf-8`, 
    function (error) {    
        error ? console.error(error) : console.log("Succesfully generated Engineer profiles!");
    }
    )
}


async function distributeIntern(Intern) {
    fs.appendFile('./script.js', 
    `var Card = $('<div>');    //card
    var Img = $('<img>');     //card-img-top
    var CBody = $('<div>');   //card-body
    var Name = $('<h5>');     //card-title
    var Role = $('<p>');      //card-text
    var Nfo = $('<ul>');      //list-group list-group-flush
    var Id = $('<li>');       //list-group-item
    var Email = $('<li>');    //list-group-item
    var School = $('<li>');   //list-group-item
    
    Card.attr('class','card');
    Card.attr('style', 'width: 18rem;')
    Img.addClass('card-img-top');
    Img.attr('alt', 'PIC');
    Img.attr('src', '../assets/images/intern.png');
    CBody.addClass('card-Body');
    Name.addClass('card-title');
    Role.addClass('card-text');
    Nfo.addClass('list-group list-group-flush');
    Id.addClass('list-group-item');
    Email.addClass('list-group-item');
    School.addClass('list-group-item');
    
    
    Name.text('${Intern.getName()}'); 
    Role.text('${Intern.getRole()}');
    Id.text('${Intern.getId()}');
    Email.text('${Intern.getEmail()}');
    School.text('${Intern.getSchool()}');
    
    var main = $('#main');
    main.append(Card);
    Card.append(Img);
    Card.append(CBody);
    Card.append(Nfo);
    CBody.append(Name);
    CBody.append(Role);
    Nfo.append(Id);
    Nfo.append(Email);
    Nfo.append(School);`
    ,`utf-8`, 
    function (error) {    
        error ? console.error(error) : console.log("Succesfully generated Intern profiles!");
    }
    )
}

managerInformation();   