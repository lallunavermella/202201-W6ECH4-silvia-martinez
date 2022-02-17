require("dotenv").config();
const debug = require("debug")("ch-things:root");
const upServer = require("./server");
const connectDataBase = require("./server/db");

const port = process.env.SERVER_PORT || 4000;
const dbstring = process.env.MONGO_STRING;

(async () => {
  try {
    await upServer(port);
    await connectDataBase(dbstring);
    debug("it work");
  } catch (error) {
    debug(`Error`);
  }
})();
