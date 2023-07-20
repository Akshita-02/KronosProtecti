const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-form", (req, res) => {
  const formData = req.body;
 
  console.log(formData);
  res.json({ message: "Form data received successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
