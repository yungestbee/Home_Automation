const express = require("express");
const axios = require("axios");
const router = express.Router();


let command = ""; // Store latest command from dashboard

// Endpoint for ESP32 to fetch command
router.get("/command", (req, res) => {
  res.send(command);
  command = ""; // Reset after sending
});

// Optional: Endpoint to update command from dashboard
router.post("/command", (req, res) => {
  const { action } = req.body;
  command = action;
  console.log("New command set:", action);
  res.send("Command updated");
});

module.exports = router;
