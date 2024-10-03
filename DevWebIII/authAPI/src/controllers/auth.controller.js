const jsonwebtoken = require('jsonwebtoken');
const { PRIVATE_KEY, user} = require('../../auth');

exports.public = (_, resp) =>
    resp.status(200).json({
        message: "Testando rota publica",
    });

exports.login = (req, resp) => {
    const [, hash] = req.headers.authorization?.split("") || ["",""];
    const email =  req.body.email;

    const password = req.body.password;

    try{
        const correctPassword =
            email === "victor.favretto@email.com" && password === 12345;
        
        if(!correctPassword){
            return resp.status(401).json({ error: 'Email ou senha incorretos.' });
        }
        const token = jsonwebtoken.sign(
            { user: JSON.stringify(user)},
            PRIVATE_KEY,
            { expiresIn: "60m"}
        );
        return resp.status(200).json({data: {user, token}});
    }catch (error){
        console.log(error);
        return resp.send(error);
    }
};

exports.private = (req, resp) => {
    const {user} = req.headers;
    const currentUser = JSON.parse(user);
    return resp.status(200).json({
        message: "Rota privada",
        data:{
            userLogged: currentUser
        }
    })
}