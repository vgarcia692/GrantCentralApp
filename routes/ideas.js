/*
 * Serve JSON to our AngularJS client
// */
var bodyParser = require('body-parser');
var express = require('express');
var models = require('../models');
var router = express.Router();
var Idea = models.Idea;

router.get('/', function(req, res) {
    Idea.findAll().then(function(ideas) {
        res.send(ideas);
    })
});

router.post('/', function(req, res) {
    var newIdea = {
        title: req.body.title,
        beneficiary: req.body.beneficiary,
        amount: req.body.amount
    }

    Idea.create(newIdea).then(function (idea) {
        res.send(idea); // get idea from db not the newIdea
    });

});

router.get('/:id', function(req, res) {
    Idea.find(req.params.id).then(function(idea) {
        res.send(idea);
    });
});

router.put('/:id', function(req, res) {
    Idea.update(
        { approved: req.body.approved},
        { where: {id: req.params.id}}
     ).then(function() {
        Idea.find(req.params.id).then(function(idea) {
                res.send(idea);
            });
    });
})


module.exports = router;