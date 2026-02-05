// ====== SEARCH FUNCTIONALITY ======

// Sammle alle durchsuchbaren Dateien/Inhalte von der Seite
function collectSearchableContent() {
    const searchData = [];
    
    // Alle Links mit Download/href sammeln
    document.querySelectorAll('a[href]').forEach(link => {
        const text = link.textContent.trim() || link.getAttribute('title') || 'Datei';
        const href = link.getAttribute('href');
        const parentSection = link.closest('details');
        
        if (href && text && !text.startsWith('http')) {
            const category = parentSection ? parentSection.querySelector('h1')?.textContent || 'Datei' : 'Datei';
            searchData.push({
                title: text,
                href: href,
                category: category,
                type: getFileType(href),
                element: link
            });
        }
    });
    
    // Überschriften sammeln (h3)
    document.querySelectorAll('h3').forEach(heading => {
        const text = heading.textContent.trim();
        if (text) {
            const parentSection = heading.closest('details');
            const category = parentSection ? parentSection.querySelector('h1')?.textContent || 'Thema' : 'Thema';
            searchData.push({
                title: text,
                href: '#',
                category: category,
                type: 'section',
                element: heading
            });
        }
    });
    
    return searchData;
}

// Bestimme Dateityp basierend auf href
function getFileType(href) {
    if (href.endsWith('.pdf')) return 'pdf';
    if (href.endsWith('.zip')) return 'zip';
    if (href.endsWith('.jar')) return 'jar';
    if (href.includes('http')) return 'link';
    return 'file';
}

// Suche durchführen
function performSearch(query) {
    if (!query || query.trim().length === 0) {
        document.getElementById('search-results').innerHTML = '';
        return;
    }
    
    const searchData = collectSearchableContent();
    const lowerQuery = query.toLowerCase();
    
    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.category.toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery)
    ).slice(0, 8); // Limit auf 8 Ergebnisse
    
    displaySearchResults(results);
}

// Zeige Suchergebnisse an
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-result-item no-results">Keine Ergebnisse gefunden</div>';
        return;
    }
    
    let html = '';
    results.forEach(result => {
        const icon = getIconForType(result.type);
        html += `
            <a href="${result.href}" class="search-result-item" title="${result.title}">
                <span class="search-result-icon">${icon}</span>
                <div class="search-result-content">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-category">${result.category}</div>
                </div>
            </a>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

// Icon basierend auf Dateityp
function getIconForType(type) {
    const icons = {
        'pdf': '📄',
        'zip': '📦',
        'jar': '🔧',
        'link': '🌐',
        'section': '📚',
        'file': '📋'
    };
    return icons[type] || '📁';
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');
    
    if (!searchInput) return;
    
    // Suche beim Eingeben
    searchInput.addEventListener('input', function(e) {
        performSearch(e.target.value);
    });
    
    // Schließe Suchergebnisse beim Klick außerhalb
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResultsContainer.innerHTML = '';
            searchInput.value = '';
        }
    });
    
    // Erlaubt Klick auf Suchergebnisse
    searchResultsContainer.addEventListener('click', function(e) {
        const link = e.target.closest('.search-result-item');
        if (link && link.href !== '#') {
            link.click();
        }
    });
});

// ====== ENDE SEARCH FUNCTIONALITY ======
