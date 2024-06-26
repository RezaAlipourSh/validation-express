const { Router } = require("express");
const { authRoutes } = require("./authRoute");
const { checkAuth } = require("../middlewares/checkAuth");
const { profileRoute } = require("./profileRoute");

const router = Router();

router.use("/auth", authRoutes)
router.use("/user", checkAuth, profileRoute)

module.exports = {
    allRoutes: router
}