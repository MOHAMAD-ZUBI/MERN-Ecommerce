const mongoose = require("mongoose");
const { Product, Variant, Flavor } = require("../Models/ProductModel");

const createProduct1 = async (req, res) => {
  const { title, description } = req.body;
  try {
    const product = await Product.create({ title, description });
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(401).json({ err: error.message });
  }
};

async function createProduct(req, res) {
  try {
    const { title, description, productImg, variantsData } = req.body;

    // Create flavors
    const flavorsData = req.body.flavorsData || [];
    const flavors = await Flavor.create(flavorsData);
    let variants = [];

    // Create variants with associated flavors
    if (variantsData) {
      variants = await Variant.create(
        variantsData.map((variant) => ({
          ...variant,
          flavors: flavors.map((flavor) => flavor._id),
        }))
      );
    }

    // Create product with variants
    const product = await Product.create({
      title,
      description,
      img: productImg,
      variants: variants.map((variant) => variant._id) || [],
    });

    res.status(201).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
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
    return res.status(200).json(product);
  } catch (error) {
    return res.status(401).json({ err: error.message });
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
    return res.status(200).json(updatedProduct);
  } catch (error) {}
}

module.exports = { createProduct, getSingleProduct, createVariant };
