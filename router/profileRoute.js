const { Router } = require("express");
const { getProfile } = require("../controllers/profileController");

const router = Router();

router.get("/profile", getProfile)

module.exports = {
    profileRoute: router
}