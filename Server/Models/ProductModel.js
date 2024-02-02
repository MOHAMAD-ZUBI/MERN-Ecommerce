const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flavorSchema = new Schema({
  title: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Flavor = mongoose.model("Flavor", flavorSchema);

const variantSchema = new Schema({
  flavors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Flavor",
    },
  ],
  size: {
    type: String,
  },
  price: {
    type: Number,
  },
  img: {
    type: String,
  },
  currency: {
    type: String,
  },
  weight: {
    type: String,
  },
});

const Variant = mongoose.model("Variant", variantSchema);

const nutritionSchema = new Schema({
  energy: {
    type: String,
  },
  protein: {
    type: String,
  },
  carbohydrates: {
    type: String,
  },
  fats: {
    type: String,
  },
  sugar: {
    type: String,
  },
});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);

const baseProductSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
  },
  comments: {
    type: [String],
  },
  categories: {
    type: [mongoose.Types.ObjectId],
    ref: "Category",
  },
  variants: {
    type: [mongoose.Types.ObjectId],
    ref: "Variant",
  },
  status: {
    type: String,
    enum: ["Draft", "Active"],
    default: "Active",
  },
  nutrition: {
    energy: {
      type: String,
    },
    protein: {
      type: String,
    },
    carbohydrates: {
      type: String,
    },
    fats: {
      type: String,
    },
    sugar: {
      type: String,
    },
    salt: {
      type: String,
    },
    b6: {
      type: String,
    },
  },
});

const Product = mongoose.model("Product", baseProductSchema);

module.exports = { Flavor, Variant, Product, Nutrition, variantSchema };
