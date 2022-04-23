const express = require('express')
const users = require('./controllers/users')
var app = express()

var totoro = require('totoro-node');
app.use(express.json())
app.use('/', totoro.rain({

    "1.0.0": {
        active: true,
        deprecated: false,
        endpoints: [
            {
                route: "/",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: users.accueil
            },

            {
                route: "/currencies",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: users.currencies_liste
            },

            {
                route: "/currencies/:rank",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: users.currencies_liste_id
            },

            {
                route: "/currencies",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: users.currencies_ajout
            },

            {
                route: "/currencies/:rank",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: users.currencies_modif
            },

            {
                route: "/currencies/:rank",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: users.currencies_supr
            },

            {
                route: "*",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: users.currencies_all
            }
        ]
    }
    ,
    "2.0.0": {
        endpoints: [
            {
                route: "/",
                method: "GET",
                implementation: users.accueil_v2
            }
        ]
    }
}));


app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;