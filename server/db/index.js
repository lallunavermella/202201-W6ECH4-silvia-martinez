const debug = require("debug")("ch-things-mongo:db");
const mongoose = require("mongoose");

const connectDataBase = (connectionString) =>
  mongoose.connect(connectionString, (error) => {
    if (error) {
      debug("Couldn't connect to the database");
      return;
    }
    debug("Va bene, è stato collegato al database");
  });

module.exports = connectDataBase;
