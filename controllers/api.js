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
  let { burger_name } = req.body;
  burger.insertOne(burger_name)
  .then((data) => {
    status = data.changedRows == 1 ? 200 : 500;
    //  todo how to send the status back?
    // res.sendStatus(status);
  })
  .catch((err) => console.log(err))
  .finally(() => res.redirect('/'));
});

router.post("/burgers/devour/:id", (req, res) => {
  let {id} = req.params;
  burger.updateOne(id, true)
  .then((data) => {
    status = data.changedRows == 1 ? 200 : 500;
    //  todo how to send the status back?
    // res.sendStatus(status);
  })
  .catch((err) => console.log(err))
  .finally(() => res.redirect('/'));
});

router.post("/burgers/vomit/:id", (req, res) => {
  let {id} = req.params;
  let status;
  burger.updateOne(id, false)
  .then((data) => {
     status = data.changedRows == 1 ? 200 : 500;
    //  todo how to send the status back?
    // res.sendStatus(status);
  })
  .catch((err) => console.log(err))
  .finally(() => res.redirect('/'));
});

module.exports = router;