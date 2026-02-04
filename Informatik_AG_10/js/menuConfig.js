// ====== MENÜ-KONFIGURATION ======
// Ändere hier die Namen und Links der Menüreiter
const menuConfig = {
    items: [
        {
            id: 'home',
            label: 'Home',
            href: 'index.html',
            submenu: [
                { label: 'Übersicht', href: '#' },
                { label: 'Letzte Änderungen', href: '#' },
                { label: 'Schnelllinks', href: '#' }
            ]
        },
        {
            id: 'kurse',
            label: 'Kurse',
            href: '#kurse',
            submenu: [
                { label: 'Brückenkurs Klasse 10', href: '#' },
                { label: 'Informatik KS1', href: '#' },
                { label: 'Informatik KS2', href: '#' }
            ]
        },
        {
            id: 'downloads',
            label: 'Downloads',
            href: '#downloads',
            submenu: [
                { label: 'Schulanwendungen', href: '#' },
                { label: 'Open Source', href: '#' },
                { label: 'Vorlagen', href: '#' }
            ]
        },
        {
            id: 'login',
            label: 'Login',
            href: '#login',
            submenu: [
                { label: 'Kontakt', href: '#' },
                { label: 'Impressum', href: '#' },
                { label: 'Version', href: '#' }
            ]
        }
    ]
};
// ====== ENDE MENÜ-KONFIGURATION ======
