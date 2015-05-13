
exports.index = function(req, res){
  res.render('index', { title: 'Grant Central'});
};

exports.login = function(req,res) {
    res.render('login', { message: req.flash('loginMessage') });
};

exports.signupPage = function(req,res) {
    res.render('signup', { message: req.flash('signupMessage') });
};


exports.logout = function(req,res) {
    req.logout();
    res.redirect('index');
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

exports.rfpPartials = function (req, res) {
    var name = req.params.name;
    res.render('partials/Rfp/' + name);
};

exports.addIdea = function(req, res) {
    res.render('add', { title: 'Grant Central'});
}

exports.success = function(req, res) {
    res.render('success', { title: 'Grant Central'});
}



