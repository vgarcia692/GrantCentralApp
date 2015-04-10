
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.ideaPartials = function (req, res) {
    var name = req.params.name;
    res.render('partials/Idea/' + name);
};

exports.gwgPartials = function (req, res) {
    var name = req.params.name;
    res.render('partials/Gwg/' + name);
};