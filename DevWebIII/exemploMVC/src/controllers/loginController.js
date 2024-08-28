const loginModel = require('../models/loginModel')
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, resp) => {  
    /*  #swagger.tags = [login]
        #swagger.sumary = 'Call some function
        swagger.description = 'This endpoint will show if user is logged'
        */  
    resp.send(`<h1>${logged}</h1>`)
})
exports.getIsLogged = ((req, res) => {
    /* 
        #swagger.ignore = true
        */    
    res.render("loginView", { logged: logged })
})

exports.creatUser = ((req, res) =>{
    //#swagger.tags = ["Create user"]
    const {email, password} = req.body
    res.status(200).json("User add sucessfully")
});

exports.getbyId = ((req, res) =>{
    const filter = req.query.filter;
    const version = req.query.version;
    return res.status(200).send('Getting user');
});