const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    nodeId: Number,
    latitude: Number,
    longitude: Number,
    population: Number,
    medicalNeed: Number
});

const Location = mongoose.model('Location' , locationSchema);

module.exports = Location;