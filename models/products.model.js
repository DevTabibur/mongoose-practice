const { default: mongoose } = require("mongoose");
// schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be needed"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: [true, "Description must be needed"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
  },
  {
    timestamps: true,
  }
);

// model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
