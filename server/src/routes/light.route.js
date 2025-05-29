const express = require("express");
const axios = require("axios");
const router = express.Router();

// You can load this from a .env file or config
const ESP32_IP = "http://192.168.43.198"; 

router.post("/on", async (req, res) => {
  try {
    await axios.get(`${ESP32_IP}/light/on`);
    res.send("Light turned on");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to turn on light");
  }
});

router.post("/off", async (req, res) => {
  try {
    await axios.get(`${ESP32_IP}/light/off`);
    res.send("Light turned off");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to turn off light");
  }
});

module.exports = router;