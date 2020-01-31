const express = require("express");
const router = express.Router();

//importation des models
const User = require("../models/userModel");

const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const randomString = uid2(16);

router.get("/", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

//route  login
router.post("/user/log_in", async (req, res) => {
  // Pour afficher les données reçues :
  const body = req.fields;
  console.log(body);
  // on cherche le user qui veut se connecter
  const user = await User.findOne({
    email: body.email
  });

  try {
    if (user) {
      // si le hash du mot de passe qu'il vient de saisir est le même que le hash enregistré en BDD lors de son inscription, alors c'est bon !
      if (SHA256(body.password + user.salt).toString(encBase64) === user.hash) {
        return res.json({
          _id: user._id,
          token: user.token,
          email: user.email
        });
      } else {
        // sinon, il n'est pas autorisé à se connecter
        res.json({
          error: "Unauthorized"
        });
      }
    } else {
      res.json({
        error: "User not found"
      });
    }
  } catch (error) {
    res.json({
      error: error.message
    });
  }
});

module.exports = router;
