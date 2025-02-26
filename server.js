require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.from,
      pass: process.env.third_party_app_password,
    },
  });

  const emailObject = {
    from: process.env.from,
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: process.env.to, // list of receivers
    subject: subject,// Subject line
    text: `Hi my name is ${name}. ${message}. You can email me at ${email}`, // plain text body
    // html: message, // html body
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

