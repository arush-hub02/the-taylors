const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://arushdeepguptacse:djNi9SsK0gO1KEd4@cluster0.xx0dmwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
