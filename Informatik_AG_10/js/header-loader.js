// ====== HEADER LOADER ======
// Lädt den Header von der centralen Komponenten-Datei

function loadHeader() {
    // Prüfe ob Header bereits existiert
    if (document.querySelector('nav.navbar')) {
        console.log('Header existiert bereits');
        return; // Header existiert bereits
    }

    // Lade die Header-HTML aus der dashboard Datei (zentrale Quelle für Header auf allen Seiten)
    const headerPath = '/Informatik_AG_10/html/dashboard.html';
    
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Header konnte nicht geladen werden: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            // Erstelle einen Container für den Header
            const headerDiv = document.createElement('div');
            headerDiv.innerHTML = html;
            
            // Füge den Header am Anfang des Body ein
            const body = document.body;
            if (body.firstChild) {
                body.insertBefore(headerDiv.firstElementChild, body.firstChild);
            } else {
                body.appendChild(headerDiv.firstElementChild);
            }
            
            console.log('Header geladen und eingefügt');
            
            // Menü-Konfiguration laden und initialisieren
            setTimeout(() => {
                if (typeof generateMenuFromConfig === 'function') {
                    generateMenuFromConfig();
                    console.log('Menu generiert');
                }
                if (typeof updateLoginUI === 'function') {
                    updateLoginUI();
                    console.log('Login UI aktualisiert');
                }
            }, 100);
        })
        .catch(error => {
            console.error('Fehler beim Laden des Headers:', error);
        });
}

// Header beim Laden der Seite laden
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadHeader();
    });
} else {
    // DOM ist bereits geladen
    loadHeader();
}

// ====== ENDE HEADER LOADER ======
