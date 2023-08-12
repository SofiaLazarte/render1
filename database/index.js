const mongoose = require("mongoose");

const CONECTARDB = async () => {
    try {
      await mongoose.connect(process.env.CONECTARDB);
      console.log("Conexion exitosa");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
module.exports = CONECTARDB;