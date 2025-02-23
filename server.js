require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");

app.use(express.urlencoded({ extended: true }));



app.post("/", (req, res) => {
  const {name, email} =  req.body
  console.log(req.body)
  console.log(` body request ${name} and user email ${email}`)
})
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${3000}`);
});
