const express = require('express')
const implement = require('./implementation')
var app = express()
const authToken = require("./authenticateToken");
var totoro = require('totoro-node');


app.use(express.json())

app.use("/auth", require("./authentication"));

app.use('/',authToken, totoro.rain({

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

 
app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;