const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/cadastro', userController.getCadastro);

router.post('/cadastro', userController.postCadastro);

router.get('/successo', userController.getSuccess);

router.get('/users', userController.getAllUsers);

module.exports = router;
