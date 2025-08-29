const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
 //fronted
 app.use(express.static("public"));


// Import Routes
const urlRoutes = require("./routes");

// Routes
app.use("/api/url", urlRoutes);

// Default Route (root)
app.get("/", (req, res) => {
  res.send("🚀 Welcome to URL Shortener API");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
