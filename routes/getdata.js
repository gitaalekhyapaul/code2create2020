const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const db = require('../utils/connection');
const locationData = require('../utils/schema');
const responseArray = [];
const responseData = {};

// const data = require('../utils/data');

router.get('/getdata', (req, res, next) => {
    // const dataJSON  = JSON.stringify(data);
    // console.log(dataJSON);
    // res.json(data);
    locationData.find({})
    .exec()
    .then((locations)=>{
        // locations.forEach((ele) => {
        //     responseData.coordinates = [ele.latitude , ele.longitude];
        //     responseData.title = ele.population;
        //     responseData.description = ele.medicalNeed;
        //     responseArray.push(responseData);
        // });
        // const dataJSON = JSON.stringify(responseData);
        // res.json(responseData);
        locations.forEach((element)=>{
            console.log(element);
        });
        res.json(locations);
    })
    .catch((err)=>{
        console.log(err);
    });
});

module.exports = router;