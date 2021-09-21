const mailer = require("nodemailer")
require('dotenv').config()

/**
 * Step 1: create transporter -> it basically connects with mail server 
 * through which we can send an email 
 */
const transporter = mailer.createTransport({
    /***
     *  Here, we are using GMAIL service 
     *  Instead of defining mail server {HOST, PORT, SECURE}  
    */
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }

})


/**
 * Step 3: create your body that you want to sent to someone email address
 * Into your body we can write ->  1. from 2. to 3. cc 4. subject 5. text 6. html etc.
 * For an example:
 * Subject: To learn Nodemailer
 * From:  classshifu@gmail.com
 * To: sajibchakmahust@gmail.com
 * Text: Hello, Dear. I am looking forward to learn Nodemailer
 *  ...
 * testing
 */

const body = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "To learn Nodemailer",
    text: `Hello, Dear. I am looking forward to learn Nodemailer`,

}

// Then, pass your body as a parameter inside - transportar.sendMail(body) method

transporter.sendMail(body, (error, result) => {
    if (error) {
        console.log(`Someting goes wrong. ${error}`)
        return false
    }
    console.log(result)

})



