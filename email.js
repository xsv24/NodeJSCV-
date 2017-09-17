let nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
	service:'gmail',
	auth:{
		user:'email@gmail.com',
		pass:'password'
	}
});

exports.sendEmail = (from_email, subject, name, text) => {
	let mailOptions = {
		from:from_email,
		to:'email@gmail.com',
		subject:subject,
		text:from_email + ' '+ name + ', ' + text 
	}
	transporter.sendMail(mailOptions, (err, info) => {
		if(err)
			console.log(err);
		else
			console.log(info.response);
	});
}
