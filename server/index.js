const debug = require("debug")("ch-things:server");
const express = require("express");
const morgan = require("morgan");
const app = express;

const upServer = (port) => {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });
  });
};

module.exports = upServer;
