const mongoose = require("mongoose");
const dbHOST = process.env.DBHOST;

const connectDb = () => {
  return mongoose.connect(dbHOST);
};

module.exports = { connectDb };
