const mongoose = require('mongoose');

// Schema
var locationSchema = new mongoose.Schema({
    name: String,
    geospatial: {
    	type: {type: String, default:'Point'}, 
    	coordinates: [Number],
    },
    month: Number,
});

// Methods
locationSchema.methods.info = function () {
    console.log(this.name);
}

// Return model
module.exports = mongoose.model('locations', locationSchema);
