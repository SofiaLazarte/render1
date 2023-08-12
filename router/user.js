const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.Hello);

router.post("/", userController.userCreate);

// Exportar el enrutador
module.exports = router;