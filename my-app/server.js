require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors"); //Add this line
app.use(cors()); //Add this line
const { emailTemplate, confirmationMessage, sendErrorMessage} = require("./utilities/functions.js");
const htmlStyle = require("./utilities/htmlStyle.js");

app.use(express.urlencoded({ extended: true }));



app.post("/", (req, res) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  try {
    const { name, email, subject, message } = req.body;

    console.log("backend server", req.body);
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.from,
        pass: process.env.third_party_app_password,
      },
    });

 

    const emailDocument = emailTemplate(message, email, name);

    const emailObject = {
      from: process.env.from, // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: process.env.to, // list of receivers
      subject: subject, // Subject line
      html: emailDocument, // html body
    };

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      const info = await transporter.sendMail(emailObject);

      if (info.response === "250 OK , completed") {
        res.status(200).send(confirmationMessage(htmlStyle, name));
      }
    }

    main();
  } catch (error) {
    res.status(500).send(sendErrorMessage(htmlStyle));
  }
});

// This should be after all your other routes
// Serve your React app's index.html for all other GET requests
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


