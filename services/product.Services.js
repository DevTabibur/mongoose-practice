
const Product = require("../models/products.model")
module.exports.getProductService = async () => {
  const products = await Product.find({});
  return products;
};
