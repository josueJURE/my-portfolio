require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: true }));

app.post("/"
  , (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("backend server", req.body)
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.from,
      pass: process.env.third_party_app_password,
    },
  });

  const emailDocument = `
  <html>
    <head>
      <style>
        .preserve-line-breaks {
          white-space: pre-line
        }
        .user-img {
          width: 200px;
          height: 200px;
        }
      </style>
    </head>
    <body class="preserve-line-breaks" >
           <br />
    ${message} 
           <br />
    You can email me at ${email}. 
           <br />
    Regards 
            <br />
    ${name}
    
    </body>
  </html>
`;

  const emailObject = {
    from: process.env.from,
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: process.env.to, // list of receivers
    subject: subject, // Subject line
    // text: `Hi my name is ${name}. ${message}. You can email me at ${email}`, // plain text body
    html: emailDocument, // html body
  };

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    // 1/03/25 see recipe for success/emails.js GitHub account line 63

    const info = await transporter.sendMail(emailObject);

    if (info.response === '250 OK , completed' ) {
      // res.send("your email was sent")
      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Form Submission Response</title>
          <style>
           html, body {
          height: 100%;
          margin: 0;
          font-family: Arial, sans-serif;
        }

         body {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f4f4f4;
        }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            h1 {
              color: #333;
            }
            .success-message {
              color: green;
              font-weight: bold;
            }
            .user-data {
              margin-top: 20px;
              padding: 15px;
              background: #f9f9f9;
              border-left: 4px solid #4CAF50;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Form Submission Successful</h1>
            <p class="success-message">Thank you for your submission!</p>
            
            <div class="user-data">
              <h2>Received Data:</h2>
              <p>Name: ${'Not provided'}</p>
              <p>Email: ${'Not provided'}</p>
              <!-- Add more fields as needed -->
            </div>
          </div>
        </body>
        </html>
      `);

    }
    // try {
    //   const info = await transporter.sendMail(emailObject);

    //   console.log("Message sent: %s", info.messageId)
    //   console.log(info)
    //   res.status(200).send()
    // } catch {
    
    //   res.status(500).send({ error: "message not sent" })
    // }

    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }




  main().catch(console.error);
});
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
