# Sécurisation d'un formulaire avec Google reCAPTCHA

## Description
Ce projet est une application simple d'authentification sécurisée utilisant **Google reCAPTCHA v2** pour protéger contre les attaques automatisées. Il est composé d'un **backend** en **Node.js avec Express** et d'un **frontend** en **React.js**.

## Technologies utilisées
- **Backend** : Node.js avec Express
- **Frontend** : React.js
- **Sécurité** : Google reCAPTCHA v2
- **Outils** : Axios, dotenv, cors

## Installation

### 1. Cloner le projet
```
git clone https://github.com/aya-sahmi/securite-captcha.git
cd securite-captcha
```

### 2. Configuration du Backend
1. Aller dans le dossier backend :
   ```
   cd backend
   ```
2. Installer les dépendances :
   ```
   npm install
   ```
3. Créer un fichier `.env` :
   ```
   touch .env
   ```
   et ajouter :
   ```
   RECAPTCHA_SECRET_KEY=ta_cle_secrete
   PORT=5000
   ```
4. Démarrer le serveur :
   ```
   npm start
   ```

### 3. Configuration du Frontend
1. Aller dans le dossier frontend :
   ```
   cd ../frontend
   ```
2. Installer les dépendances :
   ```
   npm install
   ```
3. Modifier la clé publique dans `App.js` :
   ```js
   <ReCAPTCHA sitekey="ta_cle_site_google" onChange={(token) => setCaptchaToken(token)} />
   ```
4. Lancer l'application :
   ```
   npm start
   ```

## Fonctionnement
- L'utilisateur entre son email et son mot de passe.
- Il doit valider le **Google reCAPTCHA** pour prouver qu'il n'est pas un robot.
- Une requête est envoyée au backend qui vérifie le CAPTCHA auprès de **Google**.
- Si le CAPTCHA et les identifiants sont valides, l'utilisateur est authentifié.

## Problèmes possibles
- **CAPTCHA ne s'affiche pas** → Vérifier la clé publique Google reCAPTCHA.
- **Erreur de validation CAPTCHA** → Vérifier la clé secrète dans le backend.
- **Connexion refusée** → Assurez-vous que le serveur backend tourne sur le bon port.

## Auteurs
- **Aya Sahmi Lamrani**

---

🚀 **Ce projet est un exemple simple de mise en place de Google reCAPTCHA dans une application web sécurisée.**
