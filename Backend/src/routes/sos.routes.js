const express = require("express");
const router = express.Router();

const {
  createSOS,
  getSOSRequests,
  resolveSOS,
} = require("../controllers/sosController");

router.get("/", getSOSRequests);
router.post("/", createSOS);
router.patch("/:id/resolve", resolveSOS);

module.exports = router;