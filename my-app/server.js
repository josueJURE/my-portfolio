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

//             padding: 0;
//             box-sizing: border-box;
//             text-decoration: none;
//             outline: none;
//             font-family: "Caveat", cursive;
//             font-family: "Onest", sans-serif;
//             font-family: "Open Sans", sans-serif;
//             font-family: "Quicksand", sans-serif;
//             font-family: "Roboto", sans-serif;
//             font-family: "Rowdies", cursive;
//           }

//             html, body {
//             height: 100%;
//             font-size: 62.5%; /* 1rem equals 10px */
//             background: linear-gradient(#232932, #2c3138, #232932);
//           }

//            body {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background-color: #f4f4f4;
//           }
//               .container {
//               display: flex;
//               flex-direction: column;
//               justify-content: center;
//               align-items: center

//                 width: 800px;
//                 height: 500px;
//                 margin: 0 auto;
//                 background-color: #1d222a;
//                 padding: 20px;
//                 border-radius: 1rem;
//                 box-shadow: 0 0 10px rgba(0,0,0,0.1);
//               }
//               h1, .success-message  {
//                 font-size: 5rem;
//                 width: 60rem;
//                 margin: 4rem 0 2rem 0;
//                 color: #29a587;
//                 text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
//                 text-align: center;

//               }

//               .user-data {
//                 margin-top: 20px;
//                 padding: 15px;
//                 background: #f9f9f9;
//                 // border-left: 4px solid #4CAF50;
//               }

//             .return-to-homepage {
//               width: calc(100% - 3rem);
//               height: 5rem;
//               background-color: rgb(41, 165, 135);
//               color: rgb(255, 255, 255);
//               text-transform: uppercase;
//               font-size: 1.6rem;
//               font-weight: 300;
//               font-family: "Rowdies", cursive;
//               letter-spacing: 0.2rem;
//               cursor: pointer;
//               border-width: 0.2rem;
//               border-style: solid;
//               border-color: rgb(187, 187, 187);
//               border-image: initial;
//               border-radius: 3rem;

//             }`;

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

    //   <html>
    //     <head>
    //       <style>
    //         .preserve-line-breaks {
    //           white-space: pre-line
    //         }
    //         .user-img {
    //           width: 200px;
    //           height: 200px;
    //         }
    //       </style>
    //     </head>
    //     <body class="preserve-line-breaks" >
    //            <br />
    //     ${message}
    //            <br />
    //     You can email me at ${email}.
    //            <br />
    //     Regards
    //             <br />
    //     ${name}

    //     </body>
    //   </html>
    // `;

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

// app.use(express.static(path.join(__dirname, "public")));
