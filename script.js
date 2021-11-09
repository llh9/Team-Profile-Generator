var mgrCard = $('<div>');    //card
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
    
    
    mgrName.text('KHnkle'); 
    mgrRole.text('Manager');
    mgrId.text('281777');
    mgrEmail.text('kmorris@mccn.edu');
    mgrOffNum.text('614232711');
    
    var main = $('#main');
    main.append(mgrCard);
    mgrCard.append(mgrImg);
    mgrCard.append(mgrCBody);
    mgrCard.append(mgrNfo);
    mgrCBody.append(mgrName);
    mgrCBody.append(mgrRole);
    mgrNfo.append(mgrId);
    mgrNfo.append(mgrEmail);
    mgrNfo.append(mgrOffNum);var Card = $('<div>');    //card
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
    
    
    Name.text('MHinkle'); 
    Role.text('Intern');
    Id.text('01');
    Email.text('Frank@gmail.com');
    School.text('OSU');
    
    var main = $('#main');
    main.append(Card);
    Card.append(Img);
    Card.append(CBody);
    Card.append(Nfo);
    CBody.append(Name);
    CBody.append(Role);
    Nfo.append(Id);
    Nfo.append(Email);
    Nfo.append(School);var Card = $('<div>');    //card
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
    
    
    Name.text('Eddie'); 
    Role.text('Engineer');
    Id.text('02');
    Email.text('Ed@gmail.com');
    Github.text('@github');
    
    var main = $('#main');
    main.append(Card);
    Card.append(Img);
    Card.append(CBody);
    Card.append(Nfo);
    CBody.append(Name);
    CBody.append(Role);
    Nfo.append(Id);
    Nfo.append(Email);
    Nfo.append(Github);