# Pot-O-Matic

## Description
Pot-O-Matic est une application web développée en Angular qui permet de limiter le gaspillage alimentaire et de découvrir de nouvelles recettes. L'utilisateur fournit une liste d'ingrédients dont il dispose, et le site génère des recettes en fonction de ces ingrédients. Si certains ingrédients manquent, une carte interactive affiche les supermarchés les plus proches.

## Auteurs
Ce projet a été réalisé dans le cadre de la Licence 3 Informatique de l'Université du Mans par :
- **Rasson Emma**
- **Pasquier Lina**
- **Moreau Enzo**

## Technologies utilisées
- **Frontend** : Angular
- **Backend** : Node.js
- **APIs utilisées** :
  - [FatSecret](https://platform.fatsecret.com/) pour la recherche de recettes
  - [OpenStreetMap](https://www.openstreetmap.org/) pour l'affichage des supermarchés

## Installation et Lancement

### Prérequis
Assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Étapes pour lancer le projet
1. **Cloner le projet**
   ```sh
   git clone https://github.com/votre-repo/pot-o-matic.git
   cd pot-o-matic
   ```

2. **Configurer les variables d'environnement**
   - Rendez-vous dans le fichier `.env` du backend et ajoutez vos identifiants FatSecret :
     ```env
     FATSECRET_CLIENT_ID=VotreClientID
     FATSECRET_CLIENT_SECRET=VotreClientSecret
     ```

3. **Lancer le backend**
   ```sh
   cd back
   node server.js
   ```

4. **Lancer le frontend**
   ```sh
   cd ../front
   ng serve
   ```

5. **Accéder à l'application**
   Ouvrez votre navigateur et allez sur :
   ```
   http://localhost:4200
   ```

## Fonctionnalités principales
- Recherche de recettes à partir des ingrédients disponibles
- Affichage d’une carte pour localiser les supermarchés à proximité
