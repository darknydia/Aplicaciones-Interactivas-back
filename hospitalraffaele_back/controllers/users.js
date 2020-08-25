const Sequelize = require('sequelize');
const db = require('../models');
const users = db.users;

module.exports = {

    /**
     * Users Create
     */
    create (req, res) {
        return users
            .create({
                username: req.body.username,
                role_id: req.body.roleId,
                email: req.body.email,
                status: req.body.status
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Users
     */
    list (_, res) {
        return users
            .findAll({})
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Users
     */
    find (req, res) {
        return users
            .findAll({
                where: {
                    username: req.params.username,
                }
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
}