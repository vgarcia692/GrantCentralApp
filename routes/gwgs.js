/*
 * Serve JSON to our AngularJS client
 // */
var bodyParser = require('body-parser');
var express = require('express');
var models = require('../models');
var router = express.Router();
var Gwg = models.Gwg;

router.get('/', function(req, res) {
    Gwg.findAll().then(function(gwgs) {
        res.send(gwgs);
    })
});

router.post('/', function(req, res) {
    var newGwg = {
        title: req.body.title,
        beneficiary: req.body.beneficiary,
        amount: req.body.amount
    }

    Gwg.create(newGwg).then(function (gwg) {
        res.send(gwg); // get idea from db not the newIdea
    });

});

router.get('/:id', function(req, res) {
    Gwg.find(req.params.id).then(function(gwg) {
        res.send(gwg);
    });
});

module.exports = router;