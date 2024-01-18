const express = require("express");
const router = express.Router();
const {
  createProduct,
  getSingleProduct,
  createVariant,
} = require("../Controller/ProductController");
const upload = require("../Middleware/UploadMiddleware");

router.post("/create", upload.single("image"), createProduct);
router.get("/getSingle/:_id", getSingleProduct);
router.patch("/addVariant/:productId", createVariant);

module.exports = router;
