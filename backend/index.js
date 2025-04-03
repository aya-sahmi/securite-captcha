import express from 'express';
import cors from 'cors';
import dotenv from'dotenv';
import axios from 'axios';

const app = express();
app.use(cors());
dotenv.config();
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;


app.post('/api/login', async (req, res) => {
    const { email, password, captchaToken} = req.body;
    if (!captchaToken) {
        return res.status(400).json({ error: "CAPTCHA manquant" });
    }
    try{
    // Vérifier le CAPTCHA avec Google
        const captchaRes = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, { 
            params: {
                secret: RECAPTCHA_SECRET_KEY,
                response: captchaToken
            }
        });
        if (!captchaRes.data.success) {
            return res.status(400).json({ error: "CAPTCHA invalide" });
        }
        if (email === "bousselham@enset-media.ac.ma" && password === "password123") {
            return res.json({ message: "Connexion réussie !" });
        }
        else {
            return res.status(401).json({ error: "Email ou mot de passe incorrect" });
        }
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur serveur" });
    };
    // Démarrage du serveur
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`));
})
