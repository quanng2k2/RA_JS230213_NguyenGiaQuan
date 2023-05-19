const express = require("express");
const router = express.Router();
const fs = require("fs");

// get tất cả api posts
router.get("/", (req, res) => {
  const userPoints = JSON.parse(fs.readFileSync("./api/db.json", "utf8"));
  if (userPoints) {
    res.status(200).json(userPoints);
  } else {
    res.status(404).json({ message: "No question found" });
  }
});

module.exports = router;
