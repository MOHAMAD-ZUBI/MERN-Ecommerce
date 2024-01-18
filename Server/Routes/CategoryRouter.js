const express = require("express");
const router = express.Router();
const upload = require("../Middleware/UploadMiddleware");
const { createCategory } = require("../Controller/CategoryController");

router.post("/create", createCategory);

module.exports = router;
