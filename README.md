# Alos_act3
l'activite 3 de module Architecture logicielle orientée service  
  - *Implementation API versioning .*
  - *l'authentification JWT .*
  -  Thème  : Cryptome , API de crypto-monnaie .


## 1. Le versionnage :  
 - Pour l'implémentation des versionnes de notre API , on a utulise le  package [totoro-node](https://www.npmjs.com/package/totoro-node)  :  
### L'nstallation :
` $ npm install totoro-node `  
### L'usage :  
` app.use(path, totoro.rain(configuration, loggerInstance, clearConsole)); ` 
 - Dans notre modèle la version 2.0.0 est une versione etendu du versione 1.0 ,elle inclut ( plus la ressource currencies) d'autre ressources (  market / candles ).


## 2. L'authentification :
 - Pour l'implémentation d'authentification dans notre API , on a utulise le  package [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) pour genéré des jeton sécurisé  (tokens) et la vérification de l'intégrité et de l'authenticité des données   :  
### L'nstallation :
` $ npm install jsonwebtoken `  
### L'usage :  
` jwt.sign(payload, secretOrPrivateKey, [options, callback]) ` 

 
