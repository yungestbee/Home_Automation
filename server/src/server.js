require("dotenv").config();
const express = require("express");
const cors = require("cors");
const doorRoutes = require("./routes/door.routes");
const alertRoutes = require("./routes/alert.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/door", doorRoutes);
app.use("/api/alert", alertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
