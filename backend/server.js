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


//middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//mount routers to express object
app.use("/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});