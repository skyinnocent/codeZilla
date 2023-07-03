const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

//routes
router.get("/", userControllers.getAllUsers);
router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);

module.exports = router;
