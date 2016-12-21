var config = function(env){
	if (env == "dev") {
	    return {
	        "MONGO_URI": "mongodb://localhost/trips"
	    }
	} else if (env == "prod") {
		return {
        "MONGO_URI": "mongodb://" + process.env.MONGODB_PORT_27017_TCP_ADDR + ":" +
                     process.env.MONGODB_PORT_27017_TCP_PORT + 
                     "/trips"
        }
	}
}

module.exports.config = config;