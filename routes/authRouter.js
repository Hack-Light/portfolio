const express = require("express");
const route = express.Router();

route.get("/signup", (req, res) => {
  res.render("signup", { title: "SignUp - Portfolio Database" });
});

module.exports = route;
