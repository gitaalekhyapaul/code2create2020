const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const db = require('../utils/connection');
const locationData = require('../utils/schema');

router.post('/mongo', (req, res, next) => {
    const dummyLocation = new locationData({
    nodeId: req.body.nodeId,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    population: req.body.population,
    medicalNeed: req.body.medicalNeed
    });
    dummyLocation.save()
    .then( (result) => {
        console.log(result);
        res.status(200).json({
            locations: [dummyLocation]
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/mongo', (req, res, next) =>{
    locationData.find({})
    .exec()
    .then((locations) => {
        res.status(200).json(locations);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;