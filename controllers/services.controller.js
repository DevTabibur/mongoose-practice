const { default: mongoose } = require("mongoose");
const Product = require("../models/products.model");
const { getProductService } = require("../services/product.Services");

module.exports.getServicesController = async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      status: "success",
      message: "Product is found",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: "fails",
      message: err.message,
    });
  }
};

module.exports.postServiceController = async (req, res, next) => {
  try {
    // save or create
    const product = new Product(req.body);
    const result = await product.save();
    res.status(200).json({
      status: "success",
      message: "Product is posted",
      data: result,
    });
  } catch (err) {
    // next(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports.loadServiceWithId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ _id: id });
    res.status(200).json({
      status: "success",
      message: "Data get by id",
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
