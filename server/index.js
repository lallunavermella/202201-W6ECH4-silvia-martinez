const debug = require("debug")("ch-things:server");
const express = require("express");
const morgan = require("morgan");
const { errorNotFound, errorDefault } = require("./middlewares/errors");
const thingsRouter = require("./routes/things");

const app = express();

const upServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = `Couldn't start the server.${
        error.code === "EADDRINUSE" ? ` Port ${port} busy` : ""
      }`;
      reject(new Error(errorMessage));
    });
  });

app.use(morgan("dev"));

app.use(errorNotFound);

app.use(errorDefault);

app.use("things/", thingsRouter);

module.exports = upServer;
