const express = require('express')
const implement = require('./implementation')
var app = express()

var totoro = require('totoro-node');
app.use(express.json())
app.use('/',verifyToken, totoro.rain({

    "1.0.0": {
        active: true,
        deprecated: false,
        endpoints: [
            {
                route: "/",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.accueil
            },
            
            {
                route: "/login",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.login
            },

            {
                route: "/data",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_liste
            },
            {
                route: "/currencies",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_liste
            },

            {
                route: "/currencies/:rank",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_liste_id
            },

            {
                route: "/currencies",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.currencies_ajout
            },

            {
                route: "/currencies/:rank",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: implement.currencies_modif
            },

            {
                route: "/currencies/:rank",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: implement.currencies_supr
            },

            {
                route: "*",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_all
            }
        ]
    }
    ,
    "2.0.0": {
        endpoints: [
            {
                route: "/",
                method: "GET",
                implementation: implement.accueil_v2
            },

            {
                route: "/login",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.login
            },

            {
                route: "/data",
                method: "GET",
                implementation: implement.data_liste
            },
            {
                route: "/currencies",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_liste
            },
            {
                route: "/currencies/:rank",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_liste_id
            },

            {
                route: "/currencies",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.currencies_ajout
            },

            {
                route: "/currencies/:rank",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: implement.currencies_modif
            },

            {
                route: "/currencies/:rank",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: implement.currencies_supr
            },

            {
                route: "*",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.currencies_all
            }
        ]
    }
}));




// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token


function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }
app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;