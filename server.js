require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("user email", email)
  console.log(req.body);
  console.log(` body request ${name} and user email ${email}`);

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });

  const emailObject = {
    from: email,
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "<josue.jure@yahoo.com>", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: message, // html body
  };

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail(emailObject);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
});
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${3000}`);
});
