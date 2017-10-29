var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function (req,res) {
  burger.all(function (data) {
    var hbs = {
      burger: data
    };
    res.render("index", hbs);
  });
});

router.post("/api/burgers", function (req,res) {
  burger.create(req.body.burger_name, function (data) {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", function (req,res) {
  burger.update(req.params.id, function (data) {
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(202).end();
    };
  });
});

router.delete("/api/burgers/:id", function (req,res) {
  burger.delete(req.params.id, function (data) {
    if (data.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(202).end();
    };
  });
});

module.exports = router;
