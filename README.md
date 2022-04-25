# Alos_act3
l'activite 3 de module Architecture logicielle orientée service  :
  - *Implementation API versioning .*
  - *l'authentification JWT .*    
le modèle :
  -  Thème  : Cryptome , API de crypto-monnaie .
  -  Pour tester nos routes , nous avons utiliser l'outil [Postman](https://www.postman.com/)  .


## 1. Le versionnage :  
 - Pour l'implémentation des versionnes de notre API , on a utulise le  package [totoro-node](https://www.npmjs.com/package/totoro-node)  :  
### L'installation :
` $ npm install totoro-node `  
### L'usage :  
` app.use(path, totoro.rain(configuration, loggerInstance, clearConsole)); ` 
 - Dans notre modèle la version 2.0.0 est une versione etendu du versione 1.0.0 ,elle inclut ( plus la ressource currencies) d'autre ressources (  market / candles ).
### L'execution :  
##### l'accueil :
 - la route (http://localhost:3000/1.0.0) :
![image](https://user-images.githubusercontent.com/62666792/165101941-dc7beb06-cac9-4e77-ade8-73ce6cc73dea.png)
 - la route (http://localhost:3000/) (default ) :
![image](https://user-images.githubusercontent.com/62666792/165102202-dc3373c2-542c-457b-8ad6-818a3affc916.png)  
 - la route (http://localhost:3000/2.0.0) :
![image](https://user-images.githubusercontent.com/62666792/165102012-4ac8b1f2-e9c5-4140-8018-1a1ccbdba5ec.png)



## 2. L'authentification :
 - Pour l'implémentation d'authentification dans notre API , on a utulise le  package [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) pour genéré des jeton sécurisé  (tokens) et la vérification de l'intégrité et de l'authenticité des données   :  
### L'installation :
` $ npm install jsonwebtoken `  
### L'usage :  
` jwt.sign(payload, secretOrPrivateKey, [options, callback]) `   
le code de signup , login et logout sont implémentés au fichie [authentication](https://github.com/ferhi-fatah/Alos_act3/blob/main/authentication.js)  
### L'execution :


 
