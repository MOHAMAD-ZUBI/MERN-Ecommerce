const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    title: {
      type: String,
    },
    products: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
    },
    img: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Draft", "Active"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
