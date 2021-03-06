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
##### la récupération de data :
 - la route (http://localhost:3000/1.0.0/data) :  
 
![image](https://user-images.githubusercontent.com/62666792/165102851-27b92d40-d41c-45c8-8878-0eecebbd4853.png) 
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165104176-11cf3d97-ae9a-4677-bf44-3bb6bf3e44e7.png)
 - la route (http://localhost:3000/2.0.0/data) :  
 
![image](https://user-images.githubusercontent.com/62666792/165103408-834a117d-a3ad-466b-b75a-69a01f9cc4db.png)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165104270-a74582d5-1f02-446a-a68b-519b2ed19a80.png)
##### la suppression  de data :  
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165105022-48f936db-f878-4573-b026-10ce78bc9f20.png)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165105220-e8c5f593-948f-4178-a065-d9fbee7600e9.png)
##### la modification  de data :  
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![1](https://user-images.githubusercontent.com/62666792/165106193-26112639-0f3c-402d-8a1a-d6f02d97e54e.PNG)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![2](https://user-images.githubusercontent.com/62666792/165106203-565a059f-8815-4448-b9d5-6bf0fe16aaa8.PNG)


## 2. L'authentification :
 - Pour l'implémentation d'authentification dans notre API , on a utulise le  package [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) pour genéré des jeton sécurisé  (tokens) et la vérification de l'intégrité et de l'authenticité des données   :  
### L'installation :
` $ npm install jsonwebtoken `  
### L'usage :  
` jwt.sign(payload, secretOrPrivateKey, [options, callback]) `   
le code de signup , login et logout sont implémentés au fichie [authentication](https://github.com/ferhi-fatah/Alos_act3/blob/main/authenticate/authentication.js) 
### L'execution :  
 - les data d'utilisateurs :   
 
 ![image](https://user-images.githubusercontent.com/62666792/165107711-7470438f-f050-4a8d-9473-216969110d42.png)

- Singup :  

![image](https://user-images.githubusercontent.com/62666792/165108180-2e3271b3-226e-4c3a-8d96-7558644339a3.png)
![image](https://user-images.githubusercontent.com/62666792/165110274-b260c18d-4512-4113-8857-e38563e02e72.png)
![4](https://user-images.githubusercontent.com/62666792/165109053-47bd2749-1c01-4dae-bafe-f61b9da65bc8.PNG)
![image](https://user-images.githubusercontent.com/62666792/165111626-b69fbda9-55b9-498c-a82f-0b10b6123329.png)
![image](https://user-images.githubusercontent.com/62666792/165118896-c1f6acbd-c3c9-4dd2-ba1b-7d83023b7e3f.png)

- Login ( génération de nouveau token ) :  

![image](https://user-images.githubusercontent.com/62666792/165110773-508f339c-320e-45dc-8e63-e86fd9dc98d8.png)
- Logout ( suppression de token ) :  

![image](https://user-images.githubusercontent.com/62666792/165111360-6e75f933-d9a6-4352-8385-e916ac51b1eb.png)

 - L'ajout de data :  
 
 ![image](https://user-images.githubusercontent.com/62666792/165112030-39e02069-8a58-471a-8829-8e7c47179b48.png)
 ![image](https://user-images.githubusercontent.com/62666792/165119638-83a29eb1-d505-47b9-87c1-1aa873136858.png)
 ![image](https://user-images.githubusercontent.com/62666792/165118032-8d9aae76-bc88-4948-98ab-7c61de803854.png)











 
