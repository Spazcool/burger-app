const router = require("express").Router();
const Burger = require('../models/burger.js');
const burger = new Burger();
const express = require("express");

router.get("/", (req, res) => {
  burger.selectAll().then((data) => {
    let eaten = data.filter((burger) => burger.devoured == true);
    let uneaten = data.filter((burger) => burger.devoured == false);

    res.render("index", 
      { burgers: 
        {
          eaten: eaten,
          uneaten: uneaten
        }
      }
    );
  }).catch((err) => {
    res.render("404");
  });

});

module.exports = router;