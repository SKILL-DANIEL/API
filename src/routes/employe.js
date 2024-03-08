const express = require('express');
const employeSchema = require('../models/employe');

const router = express.Router();

// create employe
router.post('/employes', (req, res) => {
    employeSchema(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all employees
router.get('/employes', (req, res) => {
    employeSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a employe
router.get('/employes/:id', (req, res) => {
    const { id } = req.params;
    employeSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a employe
router.put('/employes/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, deparment, position, salary } = req.body;

    employeSchema
    .updateOne({_id: id}, { $set : {name, email, deparment, position, salary }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete employe
router.delete('/employes/:id', (req, res) => {
    const { id } = req.params;

    employeSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;