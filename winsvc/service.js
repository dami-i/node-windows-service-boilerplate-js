const WinService = require("node-windows").Service;

const config = require("./config");
const log = require("./logger");

const svc = new WinService({
	name: config.name,
	description: config.description,
	script: config.entryPoint,
	execPath: process.execPath, // The path where Node is installed
	env: config.env.map(kv => {
		const [key, value] = kv.replace("=", ">_$_<").split(">_$_<"); // Custom separator
		return { name: key, value };
	}),
	maxRestarts: 5,
	maxRetries: 5,
	stopparentfirst: true,
	wait: 3,
	stoptimeout: 60
});

svc.on("error", (err) => {
	log.error(err, config.code);
	console.log(err);
});
svc.on("start", () => {
	log.info("Service started", config.code);
	console.log("Service started");
});
svc.on("stop", () => {
	log.info("Service stopped", config.code);
	console.log("Service stopped");
});
svc.on("alreadyinstalled", () => {
	log.warn("Service is already installed. Check services.msc", config.code);
	console.log("Service is already installed. Check services.msc");
	svc.start();
});
svc.on("install", () => {
	log.info("Service successfully installed", config.code);
	console.log("Service successfully installed");
	svc.start();
});
svc.on("invalidinstallation", () => {
	svc.emit("error", "Invalid installation");
});
svc.on("uninstall", () => {
	log.info("Service uninstalled", config.code);
	console.log("Service uninstalled");
});

module.exports = { svc, log };