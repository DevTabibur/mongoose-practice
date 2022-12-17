const colors = require("colors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

//database connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`DATABASE CONNECTION IS SUCCESSFUL`.red.bold);
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`APP is listening on ${PORT}`.yellow.bold);
});
