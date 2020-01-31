const mongoose = require("./models/Bdd");
const express = require("express");

const formidableMiddleWare = require("express-formidable");

const app = express();
app.use(formidableMiddleWare());

//############################
/* app.use(express.static("public"));
app.set("view engine", ejs);
app.set("views", "./views"); */
//###################################
// Importation des routes !
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
app.use(userRoutes, loginRoutes);

app.all("*", function(req, res) {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("Server has started");
});
