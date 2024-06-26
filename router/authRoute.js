const { Router } = require("express");
const { AuthControl } = require("../controllers/authController");
const auth = new AuthControl()
const { signup, login } = auth

const router = Router();

router.post("/signup", signup)
router.post("/login", login)

module.exports = {
    authRoutes: router
}