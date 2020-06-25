const router = require('express').Router();
const express = require('express');
const Burger = require('../models/burger.js');
const burger = new Burger();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/burgers", (req, res) => {
  burger.selectAll().then((data) => {
    console.log('get: ', data);
    res.json(data);
  });
});

router.post("/burgers/create", (req, res) => {
  burger.insertOne(name).then((data) => {
    console.log('insert: ', data);
    res.json(data);
  });
});

router.post("/burgers/devour/:id", (req, res) => {
  console.log('hello')
  let id = req.params.body.id;
  console.log(id)
  // burger.updateOne(id).then((data) => {
  //   console.log('insert: ', data);
  //   res.json(data);
  //   res.redirect("/");
  // });
});

router.get("/boo", (req, res) => {
  console.log('fuck')
});

router.post("/:thing/:thing2/:id", (req, res) => {
  console.log('yolo')
});

module.exports = router;