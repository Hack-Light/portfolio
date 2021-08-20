const express = require("express");
const router = express.Router();
const Message = require("../models/messages")


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});




router.post("/message", async function (req, res, next) {
  const { name, email, message, subject } = req.body;

  try {
  await Message.create({
      name, email, message, subject
    });

    res.render("success")


  } catch (err) {
    res.render("error");
  }
});

module.exports = router;
