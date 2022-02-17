const debug = require("debug")("ch-things:server");
const { application } = require("express");
const express = require("express");
const morgan = require("morgan");
const { errorNotFound, errorDefault } = require("./middlewares/errors");
const thingsRouter = require("./routers/things");

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

app.use(express.json());

app.use(morgan("dev"));

app.use(thingsRouter);

app.use(errorNotFound);

app.use(errorDefault);

module.exports = upServer;
