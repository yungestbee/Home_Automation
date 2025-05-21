const express = require("express");
const router = express.Router();
const axios = require("axios");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // sender email
    pass: process.env.EMAIL_PASS,
  },
});

router.get("/", async (req, res) => {
  console.log("happy");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.USER_EMAIL, // your destination email
    subject: "🚨 Intruder Alert",
    text: "Motion detected near your door!",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Intruder alert email sent.");
    res.send("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

module.exports = router;

