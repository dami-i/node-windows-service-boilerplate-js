// Replace this with your app

// This example app logs to the Windows Event Viewer
const config = require("./winsvc/config");
const log = require("./winsvc/logger");

setInterval(() => {
	log.info(`Service is still running [${new Date().toLocaleString()}]`, config.code);
}, 10_000);