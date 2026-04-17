// utils/email.js
const nodemailer = require('nodemailer');
require('dotenv').config();
const contactTemplate = require("../Template/template")


// console.log('send mail')


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}); 

const sendEmail = async ( email, title, body, name, mobile ) => {
    const htmlContent = contactTemplate(name, email, mobile, body);

    // console.log('mail data', email, title, body);
    const mailOptions = { 
        from: `${email}`,      
        to: process.env.EMAIL_USER,
        subject:`${title}`,
        text:`${body}`,
        html: htmlContent,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        // console.log("info sendmail", info); 

        return { success: true, message: 'Email sent', info };
    } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

module.exports = { sendEmail };
