// Fonction pour enregistrer l'adresse IP côté serveur
function saveIPAddress() {
    const ipAddress = 'Votre code pour récupérer l\'adresse IP du visiteur'; // Vous devrez implémenter cette partie côté serveur
    
    // Code pour envoyer l'adresse IP au serveur (exemple avec Node.js et Express)
    fetch('/save-ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ipAddress: ipAddress })
    });
}

// Appel de la fonction lors du chargement de la page
window.onload = saveIPAddress;
