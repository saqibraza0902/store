const nodemailer = require('nodemailer');

module.exports.mailer = (params) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secureConnection: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    var mailOptions = {
        from: process.env.USER,
        to: params.email,
        subject: 'Your OTP for SignUp',
        text: params.otp,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error.message);
        }
        console.log('Email Sent at ' + email);
    });
}