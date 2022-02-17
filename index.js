require("dotenv").config();
const debug = require("debug")("ch-things:root");
const upServer = require("./server");

const port =
  process.env.SERVER_PORT ||
  4000(async () => {
    try {
      await upServer(port);
      debug("it work");
    } catch (error) {
      debug("Not func");
    }
  })();
