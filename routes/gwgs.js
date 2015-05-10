/*
 * Serve JSON to our AngularJS client
 // */
var bodyParser = require('body-parser');
var express = require('express');
var m = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
    m.Gwg.findAll({attributes: ['id', 'title', 'approvedAt']}).then(function(gwgs) {
        res.send(gwgs);
    })
});

router.post('/', function(req, res) {

    // For the set association method
    var ideaId = req.body.IdeaId;
    // Create the new Gwg
    var newGwg = {
        title: req.body.title,
        IdeaId: ideaId
    }

    m.Gwg.create(newGwg).then(function (gwg) {
        console.log(gwg);
        res.send(200); // get idea from db not the newIdea
    });

});

router.get('/:id', function(req, res) {
    m.Gwg.find(req.params.id).then(function(gwg) {
        res.send(gwg);
    });
});

router.put('/:id', function(req, res) {
    m.Gwg.update(
        {
            projectDirector: req.body.projectDirector,
            stratPlan: req.body.stratPlan,
            govCounterpart: req.body.govCounterpart,
            vp: req.body.vp,
            dean: req.body.dean,
            coreIdea: req.body.coreIdea,
            goalsAndObj: req.body.goalsAndObj,
            supportingEvi: req.body.supportingEvi,
            projectDesc: req.body.projectDesc,
            estBudget: req.body.estBudget,
            evaluation: req.body.evaluation
        },
        { where: {id: req.params.id}})
        .then(function() {
            m.Gwg.find(req.params.id).then(function(gwg) {
                res.send(gwg);
            });
        });
})

module.exports = router;