const path = require("path");
const router = require("express").Router();

let burgers = ['big', 'blocke', 'thing'];

router.get("/", function(req, res) {

  // res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("index", { burgers });

});

router.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("index", { burgers });

});

module.exports = router;