const express = require("express");
const axios = require("axios");
const router = express.Router();

const ESP32_IP = process.env.ESP32_IP;

router.post("/open", async (req, res) => {
  console.log("first")
  try {
    await axios.get(`http://192.168.43.147/door/open`);
    res.send("Door opened");
  } catch (err) {
    res.status(500).send("Failed to open door");
  }
});

router.post("/close", async (req, res) => {
  console.log("Second");
  try {
    await axios.get(`http://192.168.43.147/door/close`);
    res.send("Door closed");
  } catch (err) {
    res.status(500).send("Failed to close door");
  }
});

module.exports = router;
