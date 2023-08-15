require('dotenv').config();

const express = require('express'); // inicializamos express
const app = express(); 
const port = 3000// creamos puerto

const userRoute = require("./router/user");
const productRoute = require("./router/product");

//Conectamos la base
const CONECTARDB = require("./dataBase/index");
const bodyParser = require('body-parser');
CONECTARDB();

//bodyparser. le decimos a nodejs que lo que le mandamos es en formato json

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//conectar rutas

app.use('/api/users',userRoute);
app.use('/api/products',productRoute);


// http://localhost:3000/api/users
// http://localhost:3000/api/products


app.listen(port, () => { 
console.log(`Example app listening on port ${port}`) })