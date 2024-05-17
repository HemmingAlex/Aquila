// import { supabase } from "../../data/initSupabase";
const nodemailer = require("nodemailer");

export default async function handler(req:any, res:any) {
  if (req.method === "POST") {
    const body = req.body;

    // const { data, error } = await supabase.from("Messages").insert(body);

    // if (!error) {
      // Send an email
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

      // res.status(200).json(data);
    } else {
      console.log('fook')
      // res.status(500).json(error);
    }
  }
  // if (req.method === "DELETE") {
  //   const { id } = req.body;

  //   const { data, error } = await supabase
  //     .from("Messages")
  //     .delete()
  //     .match({ id });

  //   if (!error) {
  //     res.status(200).json(data);
  //   } else {
  //     res.status(500).json(error);
  //   }
  // }
// }
