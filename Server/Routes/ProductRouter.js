const express = require("express");
const router = express.Router();
const {
  createProduct,
  getSingleProduct,
  createVariant,
} = require("../Controller/ProductController");

router.post("/create", createProduct);
router.get("/getSingle/:_id", getSingleProduct);
router.patch("/addVariant/:productId", createVariant);

module.exports = router;
