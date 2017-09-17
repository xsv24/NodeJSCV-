use cv;
// languages collection
db.createUser({
    user: 'tom',
    pwd: 'paintball247',
    roles: [{ role: 'readWrite', db:'cv'}]
});

db.languages.insert({
	name:"HTML",
	skill:4
});
db.languages.insert({
	name:"CSS",
	skill:4
});
db.languages.insert({
	name:"JavaScript",
	skill:4
});
db.languages.insert({
	name:"PHP",
	skill:4
});
db.languages.insert({
	name:"Java",
	skill:5
});
db.languages.insert({
	name:"C/C++",
	skill:4
});
db.languages.insert({
	name:"C#",
	skill:4
});
db.languages.insert({
	name:"SQL",
	skill:4
});
db.languages.insert({
	name:"NoSQL",
	skill:4
});
db.languages.insert({
	name:"Python",
	skill:4
});

// platforms collection

db.platforms.insert({
	name:".NET",
	skill:4
});
db.platforms.insert({
	name:"AWS Lambda",
	skill:5
});
db.platforms.insert({
	name:"AWS DynamoDB",
	skill:5
});
db.platforms.insert({
	name:"Git",
	skill:5
});
db.platforms.insert({
	name:"Android",
	skill:5
});
db.platforms.insert({
	name:"Unity",
	skill:3
});
db.platforms.insert({
	name:"Adobe Illustrator",
	skill:4
});

// concepts collection

db.concepts.insert({
	name:"Agile Scrum",
	skill:5
});
db.concepts.insert({
	name:"Front End",
	skill:4
});
db.concepts.insert({
	name:"Back End",
	skill:5
});
db.concepts.insert({
	name:"Object Oriented",
	skill:4
});
db.concepts.insert({
	name:"Test Driven Development",
	skill:4
});
db.concepts.insert({
	name:"Data Structures",
	skill:4
});
db.concepts.insert({
	name:"Algorithms",
	skill:4
});
db.concepts.insert({
	name:"AI",
	skill:3
});


// experience collection
db.experiences.insert({
	_id:0,
	title:"Bachelor of Information Sciences",
	commerical:false,
	location:"Massey University",
	from_date: new Date("2014-02-26"),
	to_date: new Date("2017-06-12"),
	description:
		"Majoring in Computer Science and Minoring in Information Technology:\n\n" +
		"I've learnt a broad spectrum of skills from business management through to developing software and hardware. " +
		"Through my degree I have gained a well-rounded understanding of the industry as well as the specialist skills " +
		"needed to become an excellent ICT professional."
});
db.experiences.insert({
	_id:1,
	title:"Full Stack Developer",
	commerical:true,
	location:"Massey University",
	from_date: new Date("2016/02/20"),
	to_date: new Date("2017/06/3"),
	description:
		"This project involved creating an Android application for sporting events allowing scheduling of matches at public and private venues.\n\n" +
		
		"This application involved the following technologies: Android client code written in Java, the UI structure " +
        "layout and widgets created in XML, AWS Lambda operated as the sever returning JSON and generally communicates " +
        "with Dynamo DB (a NoSQL Database), and Bit Bucket was used as our version control system which uses Git.\n\n" +

        "I originally worked on this project as a paper that was part of my degree with two other students and we used " +
        "Agile Scrum to organize our tasks and track the progress of the applications development. Once the paper finished " +  
        "I was invited to work with the project director to assist his team in completing the project."
});




