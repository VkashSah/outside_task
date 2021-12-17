"use strict";
// Entry Point of the Server
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const port = process.env.PORT || 5000;
const app_name = process.env.app_name || "Vending Machine";

app.set("PORT_NUMBER", port);

//  Start the server on port.
server.listen(port, () => {
  console.log(`${app_name} started on port ${port} at Date ${new Date()}`);
});

// Close the Server safely.
process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});
module.exports = server;
