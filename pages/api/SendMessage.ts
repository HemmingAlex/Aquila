const nodemailer = require("nodemailer");

export default async function handler(req:any, res:any) {
  if (req.method === "POST") {
      const body = req.body;
      const {name, email,options, message } = body;

      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APPPASSWORD
        },
        secure: true,
      });

      const mailData = {
        from: {
          name: name,
          address: process.env.EMAIL,
        },
        replyTo: email,
        to: process.env.MYEMAIL,
        subject: `${options} is slected`,
        text: message,
        html: `${message}`,
      };

      await transporter.sendMail(mailData);

    } else {
      console.log('fook')
    }
  }

