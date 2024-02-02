const { Variant, Flavor } = require("../Models/ProductModel");
const Cart = require("../Models/CartModel");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const checkUser = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const addVariant = async (updatedVariants, variantToAdd, flavor, total) => {
  const variantToAddObjectId = new mongoose.Types.ObjectId(variantToAdd);
  const variant = await Variant.findById({ _id: variantToAdd });
  if (!variant) return total;

  const index = updatedVariants.findIndex(
    (variant) =>
      JSON.stringify(variant.product) ===
        JSON.stringify(variantToAddObjectId) && flavor === variant.flavor
  );

  if (index !== -1) {
    // Variant exists, update quantity
    updatedVariants[index] = {
      ...updatedVariants[index],
      quantity: ++updatedVariants[index].quantity,
    };
  } else {
    // Variant doesn't exist, add it to the array
    updatedVariants.push({ product: variantToAdd, quantity: 1, flavor });
  }
  return (total += variant.price);
};

const removeVariant = async (
  updatedVariants,
  variantToRemove,
  flavor,
  total
) => {
  const variantToRemoveObjectId = new mongoose.Types.ObjectId(variantToRemove);
  const variant = await Variant.findById({ _id: variantToRemove });
  if (!variant) return total;
  const index = updatedVariants.findIndex(
    (variant) =>
      JSON.stringify(variant.product) ===
        JSON.stringify(variantToRemoveObjectId) && flavor === variant.flavor
  );

  if (index !== -1) {
    // Variant exists, update quantity
    if (updatedVariants[index].quantity > 1) {
      updatedVariants[index] = {
        ...updatedVariants[index],
        quantity: --updatedVariants[index].quantity,
      };
    } else {
      updatedVariants.splice(index, 1);
    }
    return (total -= variant.price);
  }
};

const create = async (req, res) => {
  try {
    const { variants, variantToAdd, variantToRemove, flavor } = req.body;
    if (!variantToAdd && !variantToRemove)
      return res.status(401).json("bad request abi");
    const token = req.headers.authorization.split(" ")[1];
    const user = await checkUser(token);
    let cart = await Cart.findOne({ user: user._id });

    let total = cart?.total || 0;
    let updatedVariants = variants || [];
    if (cart) updatedVariants = updatedVariants.concat(cart.products); // updated to merge databased cart with new data

    if (variantToRemove && !cart) return res.status(401).json("attmnyk 3lya");
    if (variantToRemove)
      total = await removeVariant(
        updatedVariants,
        variantToRemove,
        flavor,
        total
      );

    if (variantToAdd)
      total = await addVariant(updatedVariants, variantToAdd, flavor, total);

    if (cart) {
      cart = await Cart.findOneAndUpdate(
        { _id: cart._id },
        {
          total,
          $set: { products: updatedVariants },
        },
        { new: true }
      );
    } else {
      cart = await Cart.create({
        total,
        products: updatedVariants,
        user: user._id,
      });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const Get = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = await checkUser(token);
    const cart = await Cart.findOne({ user: user._id })
      .populate({ path: "products.product", select: "-flavors" })
      .exec();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { create, Get };
