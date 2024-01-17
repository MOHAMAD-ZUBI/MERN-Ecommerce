const express = require("express");
const {
  register,
  getUsers,
  login,
  deleteUser,
  addRole,
  deleteRole,
} = require("../Controller/AuthController");

const { isAdminUser } = require("../Middleware/Roles");

const router = express.Router();

// getUsers
router.get("/", getUsers);
// register
router.post("/register", register);

// login
router.post("/login", login);

// deleteUser

router.get("/delete/:id", deleteUser);

// update Role
router.patch("/addRole/:id", addRole);

router.patch("/deleteRole/:id", deleteRole);

module.exports = router;
