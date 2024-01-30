const express = require("express");
const router = express.Router();
const {
  createProduct,
  getSingleProduct,
  createVariant,
  getAllProducts,
  updateProduct,
} = require("../Controller/ProductController");
const upload = require("../Middleware/UploadMiddleware");

router.post("/create", upload.single("image"), createProduct);
router.get("/getSingle/:slug", getSingleProduct);
router.patch("/addVariant/:productId", createVariant);
router.patch(
  "/updateProduct/:productId",
  upload.single("image"),
  updateProduct
);
router.get("/all/:limit", getAllProducts);
router.get("/");

module.exports = router;
