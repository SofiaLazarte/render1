require('dotenv').config();

const express = require('express'); // inicializamos express
const app = express(); 
const port = 3000// creamos puerto

const userRoute = require("./router/user");

//Conectamos la base
const CONECTARDB = require("./dataBase/index");
CONECTARDB();

//conectar rutas

app.use('/api/users',userRoute);

//app.use("/api/users", userRoute);

// http://localhost:3000/api/users


app.listen(port, () => { 
console.log(`Example app listening on port ${port}`) })