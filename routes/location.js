const fs = require('fs');
const path = require("path");
const express = require('express');
const router = express.Router();


// Models
var Location = require('../models/location');

// Routes
router.route('/locations')

	.get(function(req, res){
		Location.find().lean().exec(function(error, locations){
			res.json(JSON.stringify(locations));
		});
	})

	.post(function(req, res){

		var location = new Location();
		location.name = req.body.name;
		location.geospatial.coordinates = req.body.coordinates.split(',').map(Number);

		location.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Location saved!' });
		});
	});

router.route('/locations_html')

	.get(function(req, res){
		res.sendFile(path.join(__dirname+'/../index.html'));
	});

module.exports.routes = router;