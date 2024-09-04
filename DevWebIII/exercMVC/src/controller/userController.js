const User = require('../model/userMOdel');

exports.getCadastro = ((req, res) => {
    res.render('cadastro');
});

exports.postCadastro = (req, res) => {
    const { username, email} = req.body;
    const newUser = new User(username, email);
    newUser.save();
    res.redirect('/sucesso');
};

exports.getSuccess = (req, res) => {
    res.render('successo');
};

exports.getAllUsers = (req, res) => {
    res.json(User.getAll());
};