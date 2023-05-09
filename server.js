const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3300;


app.listen(port, () => {
    console.log("Servidor corriendo correctamente");
});

mongoose.connect("mongodb+srv://ekodi298:pHVJKqIln2gSSHpz@cluster0.ctbq1ld.mongodb.net/test") 
.then((con) => {
    console.log("Conectado a la base de datos");
});
