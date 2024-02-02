const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    total: {
      type: Number,
    },
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Variant",
        },
        quantity: {
          type: Number,
          default: 1, // You can set a default quantity if needed
        },
        flavor: {
          type: String,
          default: "Aromasiz", // You can set a default quantity if needed
        },
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
