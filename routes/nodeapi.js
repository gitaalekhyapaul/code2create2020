const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const data = require('../utils/data');

router.post('/nodeapi', (req, res, next) => {
    console.log(req.body);
    const dataSchema = {};
    const coords = [];
    coords[0] = req.body.lat;
    coords[1] = req.body.lon;
    dataSchema.coordinates = coords;
    dataSchema.title = "NodeMCU";
    dataSchema.description = "Data from NodeMCU";
    console.log(dataSchema);
    data.push(dataSchema);
    res.redirect('/');
});

module.exports = router;