const express = require("express");
require("dotenv").config();

const db = require("./config/db");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(express.json());
app.use("/api", schoolRoutes);   // ✅ THIS MUST EXIST

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});