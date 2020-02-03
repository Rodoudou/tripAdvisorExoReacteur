const mongoose = require("./models/Bdd");
const express = require("express");
const mailgun = require("mailgun-js");
const formidableMiddleWare = require("express-formidable");

const log = console.log;
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static("assets"));
app.use(formidableMiddleWare());

// Importation des routes !
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
app.use(userRoutes, loginRoutes);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// email,subject,text
app.post("/mail", async function(req, res) {
  try {
    subject = req.fields.subject;
    email = req.fields.email;
    message = req.fields.message;

    const api_key = "9363175cf7752246fb69831670e6beab-4167c382-22e3c11c";
    const DOMAIN = "sandboxc4eb6055eff44bd8a831719846d15394.mailgun.org";
    const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
    const data = {
      from: email,
      to: "agsdcombat@gmail.com",
      subject: subject,
      message: message
    };
    mg.messages().send(data, function(error, body) {
      try {
        return res.json({ "body data": data });
      } catch (error) {
        return console.error({ message: "An error occurred" });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.all("*", function(req, res) {
  res.send("Page not found");
});

app.listen(PORT, () => log("Server has started", 3000));
