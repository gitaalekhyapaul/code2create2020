const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const db = require('../utils/connection');
const locationData = require('../utils/schema');
// const data = require('../utils/data');

router.post('/nodeapi', (req, res, next) => {
    // console.log(req.body);
    // const dataSchema = {};
    // const coords = [];
    // coords[0] = req.body.lat;
    // coords[1] = req.body.lon;
    // dataSchema.coordinates = coords;
    // dataSchema.title = "NodeMCU";
    // dataSchema.description = "Data from NodeMCU";
    // console.log(dataSchema);
    // data.push(dataSchema);
    // res.redirect('/');
    const dummyLocation = new locationData({
        nodeId: req.body.nodeId,
        latitude: req.body.lat,
        longitude: req.body.lon,
        population: req.body.pop,
        medicalNeed: req.body.meds
    });
    dummyLocation.save()
    .then((result)=>{
        console.log(result);
        res.status(302).redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    });
});

module.exports = router;