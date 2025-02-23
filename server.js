require("dotenv").config();
const express = requir("express");
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, public)));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${3000}`);
});
