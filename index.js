require("dotenv").config();
const debug = require("debug")("ch-things:root");
const chalk = require("chalk");
const upServer = require("./server");
const connectDataBase = require("./server/db");

const port = process.env.SERVER_PORT || 4000;
const dbstring = process.env.MONGO_STRING;

(async () => {
  try {
    await connectDataBase(dbstring);
    await upServer(port);
    debug(chalk.green("it work"));
  } catch (error) {
    debug(chalk.red(`Error`));
  }
})();
