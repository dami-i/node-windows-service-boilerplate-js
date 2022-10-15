const EventLogger = require("node-windows").EventLogger;

const config = require("./config");

const log = new EventLogger({
	source: config.name
});

module.exports = log;