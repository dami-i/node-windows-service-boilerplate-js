# Node Windows Service Boilerplate (no TypeScript)

A boilerplate for creating a Node.js application that runs in background as a Windows Service. ***Version without TypeScript.***

## Getting started

Clone this template repo locally and run `npm install` to install npm dependencies.

The `winsvc` folder contains all the scripts needed for the app to run as Windows Service.

### NPM commands

| Command                 | Description            |
| ----------------------- | ---------------------- |
| `npm run svc-install`   | Creates the service    |
| `npm run svc-start`     | Starts the service     |
| `npm run svc-stop`      | Stops the service      |
| `npm run svc-uninstall` | Uninstalls the service |

Check the service is running on Windows's `services.msc` and `eventvwr.msc`.
