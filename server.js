const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const chatRoute = require("./routes/chat");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/chat", chatRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});