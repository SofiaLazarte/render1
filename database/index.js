const mongoose = require("mongoose");

const CONECTARDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sofilazartesl:<password>@cluster0.lxkqtzl.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Si entro mi rey");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = CONECTARDB;
