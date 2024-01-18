const Category = require("../Models/CategoryModel");
const {
  OK,
  InternalServerError,
  NotFound,
  Created,
} = require("../../shared/ErrorsHandler");

const createCategory = async (req, res) => {
  try {
    const { title, image, productsIds } = req.body;

    const newCategory = await Category.create({
      title,
      img: image,
      products: productsIds,
    });
    return res.status(Created).json(newCategory);
  } catch (error) {
    return res.status(InternalServerError).json({ err: error.message });
  }
};

module.exports = { createCategory };
