
var bodyParser = require('body-parser');
var express = require('express');
var m = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
    m.Rfp.findAll().then(function(rfps) {
        res.send(rfps);
    })
});

router.post('/', function(req, res) {
    var newRfp = {
        fundingAgency: req.body.fundingAgency,
        agencyProgram: req.body.agencyProgram,
        dueDate: req.body.dueDate,
        actualFundsAvailable: req.body.actualFundsAvailable,
        aveAward: req.body.aveAward,
        numOfAwards: req.body.numOfAwards,
        grantPeriodBegin: req.body.grantPeriodBegin,
        grantPeriodEnd: req.body.grantPeriodEnd,
        awardNotification: req.body.awardNotification,
        matching: req.body.matching,
        inKind: req.body.inKind,
        deptUnit: req.body.deptUnit,
        programOfficer: req.body.programOfficer,
        commPartner: req.body.commPartner,
        rfpSummary: req.body.rfpSummary,
        eligibilityInfo: req.body.eligibilityInfo,
        appContents: req.body.appContents,
        competitivePosition: req.body.competitivePosition,
        fundingHistory: req.body.fundingHistory,
        proposalDeveloped: req.body.proposalDeveloped,
        govCounterpart: req.body.govCounterpart
    }

    m.Rfp.create(newRfp).then(function () {
        res.send(200);
    });

});

router.get('/:id', function(req, res) {
    m.Rfp.find(req.params.id).then(function(rfp) {
        res.send(rfp);
    });
});

//router.put('/:id', function(req, res) {
//    Idea.update(
//        { approved: req.body.approved},
//        { where: {id: req.params.id}}
//    ).then(function() {
//            Idea.find(req.params.id).then(function(idea) {
//                res.send(idea);
//            });
//        });
//})


module.exports = router;