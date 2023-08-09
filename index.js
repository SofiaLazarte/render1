const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./router/user");

//Conectamos la base
const CONECTARDB = require("./database");
CONECTARDB();

app.use("/api/users", userRoute);

// http://localhost:3000/api/users

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});