const express = require("express");
const {getProfile, createProfile } = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authmiddleware");

const router = express.Router();

router.get("/getdata",  getProfile);
router.post("/create",authMiddleware,createProfile);




module.exports = router;