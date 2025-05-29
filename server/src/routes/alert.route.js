const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

router.get("/", async (req, res) => {
  console.log("Intruder alert triggered.");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "alomatee@yahoo.com", // Destination email
    subject: "🚨 Intruder Alert",
    text: "Motion detected in your window areagit !",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
    res.send("Alert email sent");
  } catch (error) {
    console.error("Email failed:", error);
    res.status(500).send("Failed to send alert email");
  }
});

module.exports = router;
