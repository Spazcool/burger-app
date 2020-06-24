// import express from 'express';
// import burger from '../models/burger.js';

const express = require('express');
const Burger = require('../models/burger.js');
const router = express.Router();
const burger = new Burger();

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

router.post("/burgers/devour", (req, res) => {
  let id = req.params.body.id;
  burger.updateOne(id).then((data) => {
    console.log('insert: ', data);
    res.json(data);
  });
});

module.exports = router;