const nodemailer = require('nodemailer');

const sendingEmail = (data) => {
    const {receiver,messageToBeSent,subject} = data;
    const mailOptions = {
        from: process.env.SENDINBLUE_USER,
        to: `${receiver}`,
        subject: `${subject}`,
        text: `${messageToBeSent}`
    };

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
            user: process.env.SENDINBLUE_USER,
            pass: process.env.SENDINBLUE_PASSWORD
        }
    });

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) reject(err);
            else resolve(info);
        });
    });
}

module.exports = {
    sendingEmail
}