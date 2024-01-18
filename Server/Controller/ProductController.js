const mongoose = require("mongoose");
const { Product, Variant, Flavor } = require("../Models/ProductModel");
const {
  OK,
  Created,
  Unauthorized,
  NotFound,
  InternalServerError,
} = require("../../shared/ErrorsHandler");

async function createProduct(req, res) {
  try {
    const { title, description, variantsData, categoriesIds } = req.body;
    // Create flavors
    const flavorsData = req.body.flavorsData || [];
    const flavors = await Flavor.create(flavorsData);
    let variants = [];

    // Create variants with associated flavors
    if (variantsData) {
      variants = await Variant.create(
        variantsData.map((variant) => ({
          ...variant,
          flavors: flavors.map((flavor) => flavor._id) || undefined,
        }))
      );
    }

    // Create product with variants
    const product = await Product.create({
      title,
      description,
      categories: categoriesIds || [],
      variants: variants.map((variant) => variant._id) || [],
    });

    res.status(Created).json({ product });
  } catch (error) {
    console.error(error);
    res.status(InternalServerError).json({ error: error.message });
  }
}

async function getSingleProduct(req, res) {
  try {
    const { _id } = req.params;
    const product = await Product.findById({ _id })
      .populate({
        path: "variants",
        populate: { path: "flavors" },
        select: "-__v",
      })
      .select("-__v");

    if (!product) throw new Error("no such product");
    return res.status(OK).json(product);
  } catch (error) {
    return res.status(Unauthorized).json({ err: error.message });
  }
}

async function createVariant(req, res) {
  try {
    const { size, price, img } = req.body;
    const flavorsData = req.body.flavorsData || [];
    const { productId } = req.params;
    const flavors = await Flavor.create(flavorsData);
    const newVariant = await Variant.create({
      size,
      price,
      img: img,
      flavors: flavors.map((flavor) => flavor._id),
    });

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $push: { variants: newVariant._id } },
      { new: true }
    ).populate({
      path: "variants",
      populate: { path: "flavors" },
    });
    return res.status(OK).json(updatedProduct);
  } catch (error) {
    return res.status(Unauthorized).json({ err: error.message });
  }
}

module.exports = { createProduct, getSingleProduct, createVariant };
