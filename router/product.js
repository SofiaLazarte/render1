const express = require("express");
const router = express.Router();
const userProduct = require("../controller/productController");

router.get("/", userProduct.getProduct);

router.post("/", userProduct.createProduct);

// Exportar el enrutador
module.exports = router;