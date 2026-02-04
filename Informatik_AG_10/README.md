# Informatik AG 10 - Dokumentation

## Projekt-Struktur

### Zentrale Komponenten

#### 1. Header-Komponente (`/components/header.html`)
- Zentrale HTML-Datei mit dem Navbar
- Wird auf allen Seiten über `header-loader.js` geladen
- Enthält Logo, Menü und Profil-Icon

#### 2. Header-Loader (`/js/header-loader.js`)
- JavaScript-Datei, die den Header dynamisch lädt
- Wird auf index.html und account.html eingebunden
- Triggert die Menu-Generierung und Login-UI-Aktualisierung

### Seiten

#### 1. Startseite (`/html/index.html`)
- Hauptseite mit Kursinhalten
- Header wird über header-loader.js geladen
- Login funktioniert über das Menü-Dropdown

#### 2. Profilseite (`/html/account.html`)
- Zeigt Benutzerinformationen bei Login
- Redirect nach erfolgreichem Login
- Header wird über header-loader.js geladen
- Zeigt Login-Aufforderung wenn nicht angemeldet

### Login-System

#### Dateien
- `/js/login.js` - Hauptlogik für Login/Logout
- `/json/accounts.json` - Benutzerdaten

#### Workflow
1. Benutzer klickt auf "Login" im Menü
2. Login-Dropdown wird angezeigt
3. Benutzerdaten eingeben und anmelden
4. Bei erfolgreicher Authentifizierung:
   - Benutzer wird in `localStorage` gespeichert
   - Weiterleitung zu `/html/account.html`
   - Profil-Icon wird in der Navbar angezeigt

#### Testkonten
```
admin / admin123
lehrer / lehrer123
schueler / schueler123
test / test
```

### CSS-Dateien

- `/css/common.css` - Gemeinsame Styles für alle Seiten
- `/css/style.css` - Zusätzliche Styles

## Features

### 1. Responsive Design
- Menü passt sich zu mobilen Geräten an
- Kompakte Darstellung auf kleinen Bildschirmen

### 2. Login-System
- Dropdown-Menü mit Anmeldungsformular
- Fehlerbehandlung bei falschen Credentials
- LocalStorage für Benutzersession
- Auto-Logout bei Seitenschließung

### 3. Profil-Icon mit Animation
- Profil-Icon wird nach Login angezeigt
- Pill mit Profilnamen fährt bei Hover aus
- Slide-Animation mit CSS-Transitions
- Klick auf Icon leitet zur Profilseite weiter

### 4. Zentrale Komponenten
- Header wird auf allen Seiten gleich dargestellt
- Einfache Verwaltung durch zentrale Datei
- Automatische Aktualisierung überall

## Integration neuer Seiten

Um eine neue Seite hinzuzufügen:

1. Neue HTML-Datei im `/html/` Verzeichnis erstellen
2. CSS-Links hinzufügen:
   ```html
   <link rel="stylesheet" href="/Informatik_AG_10/css/common.css">
   <link rel="stylesheet" href="/Informatik_AG_10/css/style.css">
   ```

3. menuConfig definieren (vor login.js):
   ```html
   <script>
       const menuConfig = {
           items: [
               { id: 'home', label: 'Home', href: '/Informatik_AG_10/html/index.html' },
               // ... weitere Items
               { id: 'login', label: 'Login', href: '#login', isLogin: true }
           ]
       };
   </script>
   ```

4. Scripts laden:
   ```html
   <script src="/Informatik_AG_10/js/login.js"></script>
   <script src="/Informatik_AG_10/js/header-loader.js"></script>
   ```

5. Header-Platzhalter im Body (optional):
   ```html
   <!-- Header wird von header-loader.js eingefügt -->
   ```

## Dateistruktur

```
Informatik_AG_10/
├── components/
│   └── header.html          # Zentrale Header-Komponente
├── css/
│   ├── common.css           # Gemeinsame Styles
│   └── style.css            # Zusätzliche Styles
├── html/
│   ├── index.html           # Startseite
│   └── account.html         # Profilseite
├── js/
│   ├── login.js             # Login-Logik
│   ├── header-loader.js     # Header-Loader
│   └── script.js            # Weitere Skripte
└── json/
    └── accounts.json        # Benutzerdaten
```

## Browser-Kompatibilität

- Chrome/Edge (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)
- Mobile Browser

## Entwicklungsnotizen

### LocalStorage
- `currentUser` Key speichert das Benutzer-Objekt
- Wird beim Logout gelöscht
- Überlebt Seitenwechsel

### Fehlerbehandlung
- Netzwerkfehler beim Header-Laden werden in der Konsole geloggt
- Ungültige Benutzerdaten werden ignoriert
- Fallback auf Gast-Modus wenn Login fehlschlägt

### Performance
- Header wird gecacht (existenzprüfung)
- Lazy-Loading von Komponenten
- CSS-Transitions statt JavaScript-Animationen
