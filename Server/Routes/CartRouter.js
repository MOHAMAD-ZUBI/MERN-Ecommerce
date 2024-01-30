const express = require("express");
const router = express.Router();

const { create, Get } = require("../Controller/CartController");

router.post("/create", create);
router.get("/get", Get);

module.exports = router;
