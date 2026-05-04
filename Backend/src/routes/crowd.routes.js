const express = require("express");
const router = express.Router();

const {
  getCrowdZones,
  createCrowdZone,
} = require("../controllers/crowdController");

router.get("/", getCrowdZones);
router.post("/", createCrowdZone);

module.exports = router;