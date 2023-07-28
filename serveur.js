const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

// Route pour l'URL racine ("/")
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

// Route pour gérer les requêtes POST pour enregistrer les adresses IP, navigateur et appareil
app.post('/save-ip', (req, res) => {
    let ipAddress = req.ip; // Obtient l'adresse IP du visiteur depuis les en-têtes de la requête
    let userAgent = req.get('User-Agent'); // Obtient l'en-tête User-Agent du navigateur

    // Si aucune adresse IP n'est fournie (adresse IP locale en mode "localhost"), utilisez votre adresse IP locale
    if (!ipAddress || ipAddress === '::1') {
        ipAddress = '127.0.0.1'; // Utilisez l'adresse IPv4 locale
    }

    // Enregistrement de l'adresse IP, du navigateur et de l'appareil dans un fichier texte
    const logData = `
        Adresse IP : ${ipAddress}
        Navigateur : ${userAgent}
        -----------------------------------------
    `;
    fs.appendFile('adresses-ip.txt', logData, (err) => {
        if (err) throw err;
        console.log('Informations enregistrées : ' + logData);
    });

    res.status(200).end();
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
