const { Variant } = require("../Models/ProductModel");
const Cart = require("../Models/CartModel");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const checkUser = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const create = async (req, res) => {
  try {
    const { variants, variantToAdd, variantToRemove } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const user = await checkUser(token);
    let cart = await Cart.findOne({ user: user._id });
    let updatedVariants = variants || [];

    if (cart) updatedVariants = updatedVariants.concat(cart.products);

    if (variantToRemove) updatedVariants.pop(variantToRemove);
    if (variantToAdd) updatedVariants.push(variantToAdd);

    let total = 0;
    const variantList = await Variant.find({ _id: { $in: updatedVariants } }); // find all variants from the variants array (containing objectids)

    variantList.map((variant) => {
      total += variant.price;
    });
    if (variantList.length === 1) total *= updatedVariants.length;

    if (cart) {
      cart = await Cart.findOneAndUpdate(
        { _id: cart._id },
        {
          total,
          products: updatedVariants,
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
    const cart = await Cart.findOne({ user: user._id }).populate("products");
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { create, Get };
