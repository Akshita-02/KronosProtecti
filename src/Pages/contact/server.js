const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-form", async (req, res) => {
  const formData = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io", 
    port: 587, 
    secure: false,
    auth: {
      user: "your-mailtrap-username", 
      pass: "your-mailtrap-password", 
    },
  });

  // Define the message details
  let message = {
    from: "k.security@icloud.com",
    to: "recipient1@example.com", 
    bcc: "Yuvi42351@gmail.com", 
    subject: "Contact Form Submission",
    text: `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  try {
    // Send the email
    let info = await transporter.sendMail(message);
    console.log("Email sent:", info.messageId);
    res.json({ message: "Form data received and email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "An error occurred while sending the email." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
