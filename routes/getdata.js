const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const data = require('../utils/data');

router.get('/getdata', (req, res, next) => {
    const dataJSON  = JSON.stringify(data);
    console.log(dataJSON);
    res.json(data);
});

module.exports = router;