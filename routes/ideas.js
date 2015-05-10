/*
 * Serve JSON to our AngularJS client
// */
var bodyParser = require('body-parser');
var express = require('express');
var m = require('../models');
var router = express.Router();
//var Idea = models.Idea;

router.get('/', function(req, res) {
    m.Idea
        .findAll({attributes: ['id', 'title', 'approved', 'createdAt']})
        .then(function(ideas) {
            res.send(ideas);
        });
});

router.post('/', function(req, res) {

    var subSector = req.body.subSector;
    var newIdea = {
        title: req.body.title,
        approved: req.body.approved,
        department: req.body.department,
        sector: req.body.sector,
        idea: req.body.idea,
        outcomes: req.body.outcomes,
        projectDesc: req.body.projectDesc,
        estimatedBudget: req.body.estimatedBudget,
        evaluation: req.body.evaluation
    }

    m.Idea.create(newIdea)
        .then(function (idea) {
        idea.addSubSectors(subSector);
        res.send(200);
    });

});

router.get('/:id', function(req, res) {
    m.Idea.find(
        {
            where: {id: req.params.id},
            include: [{ model: m.SubSector }]
        })
        .then(function(idea) {
        console.log(JSON.stringify(idea));
        res.send(JSON.stringify(idea));
    });
});

router.put('/:id', function(req, res) {
    m.Idea.update(
        { approved: req.body.approved},
        { where: {id: req.params.id}}
     ).then(function() {
        res.send(200);
    });
})


module.exports = router;