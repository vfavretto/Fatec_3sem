const loginModel = require('../modules/loginModel')

const login = new loginModel()

exports.getLogin = ((req, res) =>{
    res.send(`<h1>${logged}</h1>`)
})

exports.getIsLogged = ((req, res) =>{
    res.render("loginView", {logged : logged});
});
