require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors"); //Add this line
app.use(cors()); //Add this line
const {
  emailTemplate,
  confirmationMessage,
  sendErrorMessage,
} = require("./utilities/functions.js");

const fs = require("fs");
const OpenAI = require("openai")

const myText = require('./input.ts')

console.log("myText:", myText)


const openai = new OpenAI({
  apiKey: process.env.openaiAPI,
});
const speechFile = path.resolve("./speech.mp3");

(async () => {
  const mp3 = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "echo",
    input: myText.default,
    instructions: "Speak in a cheerful and positive tone, with a British accent.",
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
})();





const htmlStyle = require("./utilities/htmlStyle.js");

app.use(express.urlencoded({ extended: true }));

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { Request, Response } from "express";

app.post("/", (req: Request, res: Response) => {
  console
    .log
    // `${req.method} ${req.secure ? "https" : "http"}://${req.get("host")}${req.originalUrl}`
    ();

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

    async function createUser(
      param1: string,
      param2: string,
      param3: string,
      param4: string
    ) {
      const user = await prisma.user.create({
        data: {
          fullName: param1,
          email: param2,
          subject: param3,
          message: param4,
        },
      });
      console.log("User created:", user);
    }

    createUser(name, email, subject, message)
      .then(async () => {
        await prisma.$disconnect();
        console.log("User created successfully");
      })
      .catch(async (error) => {
        console.error("Error creating user:", error);
        await prisma.$disconnect();
        process.exit(1);
      });
  } catch (error) {
    res.send(sendErrorMessage(htmlStyle));
  }
});

// This should be after all your other routes
// Serve your React app's index.html for all other GET requests
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use("/audio", express.static(path.join(__dirname)));


app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
