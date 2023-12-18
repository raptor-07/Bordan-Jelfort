require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoConnectionStr = process.env.MONGO_CONNECTION_STR;

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const authRouter = require("./routers/authRouter");

// Connect to MongoDB Atlas
mongoose.connect(mongoConnectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connection successful"));

//mount routers to express object
app.use("/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});