const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const data = require('../utils/data');

router.get('/admin', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
});

router.post('/admin', (req, res, next) => {
    // console.log(req.body);
    const dataSchema = {};
    const coords = [];
    coords[0] = parseFloat(req.body.latitude);
    coords[1] = parseFloat(req.body.longitude);
    dataSchema.coordinates = coords;
    dataSchema.title = req.body.title;
    dataSchema.description = req.body.description;
    // data.push(req.body);
    console.log(dataSchema);
    data.push(dataSchema);
    res.redirect('/admin');
});

module.exports = router;

// module.exports = {
//     router: router,
//     data: data
// };