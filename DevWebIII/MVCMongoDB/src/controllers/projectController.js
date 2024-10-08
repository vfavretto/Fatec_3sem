var Project = require('../models/projectModel');

exports.getProjects = async function (req, res){
    /*
    #swagger.tags = [project]
    #swagger.summary = 'List all projects'
    #swagger.description = 'This endpoint will show all projects'
    #swagger.parameters = [
        {
            name: 'id',
            in: 'path',
            description: 'Project ID',
            required: true,
            type: 'string'
        }
    ]
    #swagger.responses = {
        '200': {
            description: 'Projects list',
            schema: {
                type: 'array',
                items: {
                    $ref: '#/definitions/Project'
                }
            }
        },
        '500': {
            description: 'Error processing request'
        }
    }
    */
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
    /*
    #swagger.tags = [project]
    #swagger.summary = 'Create a new project'
    #swagger.description = 'This endpoint will create a new project'
    #swagger.parameters = [
        {
            name: 'title',
            in: 'body',
            description: 'Project title',
            required: true,
            schema: {
                type: 'string'
            }
        },
        {
            name: 'description',
            in: 'body',
            description: 'Project description',
            required: true,
            schema: {
                type:'string'
            }
        },
        {
            name: 'assignedTo',
            in: 'body',
            description: 'Project assigned to user ID',
            required: true,
            schema: {
                type:'string'
            }
        }
    ]
    #swagger.responses = {
        '201': {
            description: 'Project created',
            schema: {
                $ref: '#/definitions/Project
    */

    let project = new Project(
        {
            title: req.body.title,
            description: req.body.description,
            assignedTo: req.body.assignedTo
        }
    );
    project.save()
    .then(savedProject => res.status(201).send(savedProject.toJSON()))
    .catch((err) => {
        res.status(500).send({message: `${err.message} - falha ao cadastrar projecto`})
    })
};

exports.details = async function (req, res) {
    /*
    #swagger.tags = [project]
    #swagger.summary = 'Get project details'
    #swagger.description = 'This endpoint will show project details'
    #swagger.parameters = [
        {
            name: 'id',
            in: 'path',
            description: 'Project ID',
            required: true,
            type: 'string'
        }
    ]
    #swagger.responses = {
        '200': {
            description: 'Project details',
            schema: {
                $ref: '#/definitions/Project'
            }
        },
        '500': {
            description: 'Error processing request'
        }
    }
    */
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async function (req, res) {
    /*
    #swagger.tags = [project]
    #swagger.summary = 'Update project details'
    #swagger.description = 'This endpoint will update project details'
    #swagger.parameters = [
        {
            name: 'id',
            in: 'path',
            description: 'Project ID',
            required: true,
            type: 'string'
        }
    ]
    #swagger.responses = {
        '200': {
            description: 'Project details updated',
            schema: {
                $ref: '#/definitions/Project'
            }
        },
        '500': {
            description: 'Error processing request'
        }
    }
    */
    try {
        const result = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.delete = async function (req, res) {
    /*
    #swagger.tags = [project]
    #swagger.summary = 'Delete project'
    #swagger.description = 'This endpoint will delete project'
    #swagger.parameters = [
        {
            name: 'id',
            in: 'path',
            description: 'Project ID',
            required: true,
            type: 'string'
        }
    ]
    #swagger.responses = {
        '200': {
            description: 'Project deleted',
            schema: {
                $ref: '#/definitions/Project'
            }
        },
        '500': {
            description: 'Error processing request'
        }
    }
    */
    try {
        const result = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}