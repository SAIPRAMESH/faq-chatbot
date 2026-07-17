const express = require("express");
const path = require("path");

const chatRoute = require("./routes/chat");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/chat", chatRoute);

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Port
const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});