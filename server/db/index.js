const debug = require("debug")("ch--things-mongo:db");
const mongoose = require("mongoose");

const connectDataBase = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(`Couldn't connect to the database: ${error.message}`));
        return;
      }
      debug("Connected to DB");
      resolve();
    });
  });

module.exports = connectDataBase;
