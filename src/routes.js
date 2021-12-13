const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Campus = require('./models/campus');
const Docent = require('./models/docent');

router.get('/', (req, res) => {
    console.log('/ router called');
    res.send('<h1>Welcome to the API </h1>');
})

router.get('/campus', async(req, res) => {
    console.log('/ campus router called');
    try {
        res.send(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async(req, res) => {
    console.log('/ campus/:id router called');
    try {
        res.send(await Campus.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async(req, res) => {
    console.log('/ campus/create router called');
    try {
        res.send(await Campus.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async(req, res) => {
    console.log('/ campus/update/:id router called');
    try {
        res.send(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/campus/delete/:id', async(req, res) => {
    console.log('/ campus/delete/:id router called');
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/docent', async(req, res) => {
    console.log('/docent route called');
    try {
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;