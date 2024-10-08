var User = require('../models/userModel')

exports.getUser = async function(req, res) {
      /*
        #swagger.tags = ['User']
        #swagger.summary = 'Return list of users'
        #swagger.responses[200] = {
            description: 'List of users returned successfully'
        }
        #swagger.responses[500] = {
            description: 'Error while getting users'
        }
    */
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.create = function (req, res) {
    /*
        #swagger.tags = ['User']
        #swagger.summary = 'Create a new user'
        #swagger.responses[200] = {
            description: 'Create user successfully'
        }
        #swagger.responses[500] = {
            description: 'Error while create users'
        }
    */
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((err) => {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.`})
        })
}

exports.details = async function (req, res) {
    /*
    #swagger.tags = ['User']
        #swagger.summary = 'Return user details'
        #swagger.responses[200] = {
            description: 'User details returned successfully'
        }
        #swagger.responses[500] = {
            description: 'Error while getting user details'
        }
    */
    try {
        const result = await User.findByIdAndUpdate(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.update = async function (req, res) {
    /*
    #swagger.tags = ['User']
        #swagger.summary = 'Update user details'
        #swagger.responses[200] = {
            description: 'User details updated successfully'
        }
        #swagger.responses[500] = {
            description: 'Error while updating user details'
        }
    */
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.delete = async function (req, res) {
    /*
    #swagger.tags = ['User']
    #swagger.summary = 'Delete user'
        #swagger.responses[200] = {
            description: 'User deleted successfully'
        }
        #swagger.responses[500] = {
            description: 'Error while deleting user'
        }
    */
    try {
        const result = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}