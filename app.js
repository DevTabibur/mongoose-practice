const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const ServicesController = require("./controllers/services.controller");
const productRoutes = require("./routes/v1/product.route");

// middlewares
app.use(express.json());
app.use(cors());

// mongoose middleware for saving data
// productSchema.pre("save", function (next) {
//   console.log("before saving data");

//   next();
// });
// productSchema.post("save", function (doc, next) {
//   console.log("after saving data");
//   next();
// });

// query
app.use("/api/v1/services", productRoutes)


app.get("/", (req, res) => {
  res.send("Route is working YAY");
});

app.all("*", (req, res, err) => {
  res.status(500).json({
    status: "fails",
    message: "No Routes are found!",
  });
});

module.exports = app;
