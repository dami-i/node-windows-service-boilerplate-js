const { resolve } = require("node:path/win32");

const config = {
	name: "MyWindowsServiceApp", // The service title
	description: "My app running as a Windows Service", // The text that will appear as the service description
	entryPoint: resolve("./app.js"), // Change to the entry point of your app, relative to root project folder
	env: [
		"NODE_ENV=development",
	],
	code: 3487, // The code shown on Windows event logger
};

module.exports = config;

console.log(config.entryPoint);