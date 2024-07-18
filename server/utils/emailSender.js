const nodemailer = require('nodemailer');
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const { PASS } = process.env;

function replaceContent(content, creds) {
    let allkeysArr = Object.keys(creds);
    allkeysArr.forEach(function (key) {
        content = content.replace(`#{${key}}`, creds[key]);
    })

    return content;
}
async function EmailHelper(templateName, reciverEmail, creds) {
    
    try {
        const templatePath = path.join(__dirname, "email_templates", templateName);
        let content = await fs.promises.readFile(templatePath, "utf-8");
        const emailDetails = {
            to: reciverEmail,
            from: 's474996633@gmail.com',
            subject: 'RESET OTP',
            text: `Hi ${creds.name} this your reset otp ${creds.otp}`,
            html: replaceContent(content, creds),
        }
        const transportDetails = {
            host: 'smtp-mail.outlook.com',
            port: 587,
            auth: {
                user: "s474996633@gmail.com",
                pass: PASS
            }
        }

        const transporter = nodemailer.createTransport(transportDetails);
        await transporter.sendMail((emailDetails))
        console.log("email sent")
    } catch (err) {
        console.log(err)
    }

}

module.exports = EmailHelper;