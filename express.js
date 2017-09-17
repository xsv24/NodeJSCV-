'use strict';

let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');
let fs = require('fs');
let mongo = require('./mongoDB.js');
let email = require('./email.js');

let server = express();
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

let createSkillList = (res) => {
	return res.map((item) => {
		return {
			name:item.name,
			colour_stars:Array(item.skill + 1).join('✪'),
			grey_stars:Array(5 - item.skill + 1).join('✪')
		};
	});
}

let evenSplitLists = (array, max_items) => {
	let even_num = Math.ceil(array.length / max_items);

	return Array(even_num).fill().map((item) => {
		return array.splice(0, max_items);
	});	
}

let combineLists = (arrayOfArrays) => {
	return	arrayOfArrays.reduce((a, b) => {
		return a.concat(b);
	});	
}  

let formatDate = (dateStr) => {
	let months = 
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
	 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	try{
		let date = new Date(dateStr);
		return months[date.getMonth()] + ' ' + date.getFullYear(); 
	}catch(err){
		console.log('Format Date: cant convert date =>' + dateStr);
		console.log(err);
		return dateStr;
	}
}

server.get('/', (req, res) => {
	Promise.all(
		[
			mongo.query_collections(['languages', 'concepts', 'platforms'], {}),
			mongo.query_collection('experiences', {})
		]
	).then((data) =>{
		
		// 1. grab Skills and reform 
		let skills = data[0];
		skills = combineLists(skills);
		skills = createSkillList(skills);
		skills = evenSplitLists(skills, 9);
	
		// 2. grab expereinces and reform
		let experiences = data[1];
		experiences = experiences.map((exp) => {
			exp.from_date = formatDate(exp.from_date);
			exp.to_date = formatDate(exp.to_date);
			return exp;
		});
	
		// 3. render web page with skills and experiences
		res.render('index', {'skills':skills, 'experiences':experiences});

	}).catch((err) => {
		console.log(err);
	});

});
// post trigger email
server.post('/email.js', (req, res) => {
	try{
		let body = req.body;
		email.sendEmail(body.email, body.subject, body.name ,body.message);
		res.status(200).json({success:true});
	}catch(err){
		res.status(200).json({success:false});
		console.log(err);
	}
});

server.listen(80 || 8080);  