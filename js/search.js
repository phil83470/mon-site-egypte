document.addEventListener('DOMContentLoaded', function () {
    const directRedirects = {
        'ramsesii': '/mon-site-egypte/pages/RamsesII.html',
        'pharaons': '/mon-site-egypte/pages/pharaons.html',
        'mythologie': '/mon-site-egypte/pages/mythologie.html',
        'mythologiedetaillee': '/mon-site-egypte/pages/mythologie-detaillee.html',
        'pantheondieux': '/mon-site-egypte/pages/pantheon-dieux.html',
        'religionfuneraire': '/mon-site-egypte/pages/religion-funeraire.html',
        'djoser': '/mon-site-egypte/pages/Djoser.html',
        'sekhemkhet': '/mon-site-egypte/pages/sekhemkhet.html',
        'khaba': '/mon-site-egypte/pages/Khaba.html',
        'houni': '/mon-site-egypte/pages/Houni.html',
        'snefrou': '/mon-site-egypte/pages/snefrou.html',
        'khoufou': '/mon-site-egypte/pages/khoufou.html',
        'djedefre': '/mon-site-egypte/pages/djedefre.html',
        'khephren': '/mon-site-egypte/pages/khafre.html',
        'khafre': '/mon-site-egypte/pages/khafre.html',
        'baka': '/mon-site-egypte/pages/baka.html',
        'menkaoure': '/mon-site-egypte/pages/menkaoure.html',
        'shepseskaf': '/mon-site-egypte/pages/shepseskaf.html',
        'djedefptah': '/mon-site-egypte/pages/djedefptah.html',
        'hotepsekhemouy': '/mon-site-egypte/pages/hotepsekhemouy.html',
        'nebreouraneb': '/mon-site-egypte/pages/nebre-ou-raneb.html',
        'nynetjer': '/mon-site-egypte/pages/nynetjer.html',
        'peribsen': '/mon-site-egypte/pages/peribsen.html',
        'khasekhemouy': '/mon-site-egypte/pages/khasekhemouy.html',
        'ouserkaf': '/mon-site-egypte/pages/ouserkaf.html',
        'sahoure': '/mon-site-egypte/pages/sahoure.html',
        'neferirkarekakaii': '/mon-site-egypte/pages/neferirkare-kakaii.html',
        'niouserre': '/mon-site-egypte/pages/niouserre.html',
        'ounas': '/mon-site-egypte/pages/ounas.html',
        'premiereperiodeintermediaire': '/mon-site-egypte/pages/premiere-periode-intermediaire.html',
        'deuxiemeperiodeintermediaire': '/mon-site-egypte/pages/deuxieme-periode-intermediaire.html',
        'troisiemeperiodeintermediaire': '/mon-site-egypte/pages/troisieme-periode-intermediaire.html',
        'ra': '/mon-site-egypte/pages/ra.html',
        're': '/mon-site-egypte/pages/ra.html',
        'osiris': '/mon-site-egypte/pages/osiris.html',
        'isis': '/mon-site-egypte/pages/isis.html',
        'thot': '/mon-site-egypte/pages/thot.html',
        'seth': '/mon-site-egypte/pages/seth.html',
        'amon-re': '/mon-site-egypte/pages/amon-re.html',
        'amonre': '/mon-site-egypte/pages/amon-re.html',
        'mythecreation': '/mon-site-egypte/pages/mythe-creation.html',

        // Dynasties
        '1eredynastie': '/mon-site-egypte/pages/dynastie1.html',
        'premieredynastie': '/mon-site-egypte/pages/dynastie1.html',
        'dynastie1': '/mon-site-egypte/pages/dynastie1.html',
        '2emedynastie': '/mon-site-egypte/pages/dynastie2.html',
        'deuxiemedynastie': '/mon-site-egypte/pages/dynastie2.html',
        'dynastie2': '/mon-site-egypte/pages/dynastie2.html',
        '3emedynastie': '/mon-site-egypte/pages/dynastie3.html',
        'troisiemedynastie': '/mon-site-egypte/pages/dynastie3.html',
        'dynastie3': '/mon-site-egypte/pages/dynastie3.html',
        '4emedynastie': '/mon-site-egypte/pages/dynastie4.html',
        'quatriemedynastie': '/mon-site-egypte/pages/dynastie4.html',
        'dynastie4': '/mon-site-egypte/pages/dynastie4.html',
        '5emedynastie': '/mon-site-egypte/pages/dynastie5.html',
        'cinquiemedynastie': '/mon-site-egypte/pages/dynastie5.html',
        'dynastie5': '/mon-site-egypte/pages/dynastie5.html',
        '6emedynastie': '/mon-site-egypte/pages/dynastie6.html',
        'sixiemedynastie': '/mon-site-egypte/pages/dynastie6.html',
        'dynastie6': '/mon-site-egypte/pages/dynastie6.html',
        '7emedynastie': '/mon-site-egypte/pages/dynastie7.html',
        'septiemedynastie': '/mon-site-egypte/pages/dynastie7.html',
        'dynastie7': '/mon-site-egypte/pages/dynastie7.html',
        '8emedynastie': '/mon-site-egypte/pages/dynastie8.html',
        'huitiemedynastie': '/mon-site-egypte/pages/dynastie8.html',
        'dynastie8': '/mon-site-egypte/pages/dynastie8.html',
        '9emedynastie': '/mon-site-egypte/pages/dynastie9.html',
        'neuviemedynastie': '/mon-site-egypte/pages/dynastie9.html',
        'dynastie9': '/mon-site-egypte/pages/dynastie9.html',
        '10emedynastie': '/mon-site-egypte/pages/dynastie10.html',
        'dixiemedynastie': '/mon-site-egypte/pages/dynastie10.html',
        'dynastie10': '/mon-site-egypte/pages/dynastie10.html',
        '11emedynastie': '/mon-site-egypte/pages/dynastie11.html',
        'onziemedynastie': '/mon-site-egypte/pages/dynastie11.html',
        'dynastie11': '/mon-site-egypte/pages/dynastie11.html',
        '12emedynastie': '/mon-site-egypte/pages/dynastie12.html',
        'douziemedynastie': '/mon-site-egypte/pages/dynastie12.html',
        'dynastie12': '/mon-site-egypte/pages/dynastie12.html',
        '18emedynastie': '/mon-site-egypte/pages/dynastie18.html',
        'dixhuitiemedynastie': '/mon-site-egypte/pages/dynastie18.html',
        'dynastie18': '/mon-site-egypte/pages/dynastie18.html',
        '19emedynastie': '/mon-site-egypte/pages/dynastie19.html',
        'dixneufiemedynastie': '/mon-site-egypte/pages/dynastie19.html',
        'dynastie19': '/mon-site-egypte/pages/dynastie19.html',
        'spiritualite': '/mon-site-egypte/projet-spirituelles/index.html',
        'portailspirituel': '/mon-site-egypte/projet-spirituelles/index.html',
        'angeskabbale': '/mon-site-egypte/projet-spirituelles/anges-kabbale-guide.html',
        'astrologie': '/mon-site-egypte/projet-spirituelles/astrologie-exploration.html',
        'chiromancie': '/mon-site-egypte/projet-spirituelles/chiromancie-guide.html',
        'tiragecartes': '/mon-site-egypte/projet-spirituelles/guide-tirages-cartes.html',
        'chamanisme': '/mon-site-egypte/projet-spirituelles/guides-chamanisme.html',
        'guidesspirituels': '/mon-site-egypte/projet-spirituelles/guides-spirituels-intuition.html',
        'intuition': '/mon-site-egypte/projet-spirituelles/intuition-nature-mecanismes.html',
        'synchronicite': '/mon-site-egypte/projet-spirituelles/synchronicite-hasard-sens.html',
        'pendule': '/mon-site-egypte/projet-spirituelles/these-planches-pendule.html'
    };

    const normalizeString = (str) => {
        if (!str) return '';
        return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    };

    const normalizeForRedirect = (str) => {
        if (!str) return '';
        return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, '');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsContainer = document.getElementById('results-container');
    const noResultsElement = document.getElementById('no-results');

    if (query) {
        const normalizedRedirectQuery = normalizeForRedirect(query);
        if (directRedirects[normalizedRedirectQuery]) {
            window.location.href = directRedirects[normalizedRedirectQuery];
            return; 
        }

        if (searchQueryElement) {
            searchQueryElement.textContent = query;
            searchSite(query);
        }
    }

    async function searchSite(query) {
        const pagesToSearch = [
            '/mon-site-egypte/index.html',
            '/mon-site-egypte/contact.html',
            '/mon-site-egypte/pages/adjib.html',
            '/mon-site-egypte/pages/archeologie.html',
            '/mon-site-egypte/pages/architecture-urbanisme.html',
            '/mon-site-egypte/pages/baka.html',
            '/mon-site-egypte/pages/bibliographie.html',
            '/mon-site-egypte/pages/den.html',
            '/mon-site-egypte/pages/deuxieme-periode-intermediaire.html',
            '/mon-site-egypte/pages/djedefptah.html',
            '/mon-site-egypte/pages/djedefre.html',
            '/mon-site-egypte/pages/djer.html',
            '/mon-site-egypte/pages/Djeser.html',
            '/mon-site-egypte/pages/djet.html',
            '/mon-site-egypte/pages/dynastie1.html',
            '/mon-site-egypte/pages/dynastie10.html',
            '/mon-site-egypte/pages/dynastie11.html',
            '/mon-site-egypte/pages/dynastie12.html',
            '/mon-site-egypte/pages/dynastie18.html',
            '/mon-site-egypte/pages/dynastie19.html',
            '/mon-site-egypte/pages/dynastie2.html',
            '/mon-site-egypte/pages/dynastie3.html',
            '/mon-site-egypte/pages/dynastie4.html',
            '/mon-site-egypte/pages/dynastie5.html',
            '/mon-site-egypte/pages/dynastie6.html',
            '/mon-site-egypte/pages/dynastie7.html',
            '/mon-site-egypte/pages/dynastie8.html',
            '/mon-site-egypte/pages/dynastie9.html',
            '/mon-site-egypte/pages/dynasties.html',
            '/mon-site-egypte/pages/egyptebriefing.html',
            '/mon-site-egypte/pages/hor-aha.html',
            '/mon-site-egypte/pages/hotepsekhemouy.html',
            '/mon-site-egypte/pages/Houni.html',
            '/mon-site-egypte/pages/Khaba.html',
            '/mon-site-egypte/pages/khafre.html',
            '/mon-site-egypte/pages/khasekhemouy.html',
            '/mon-site-egypte/pages/khoufou.html',
            '/mon-site-egypte/pages/menkaoure.html',
            '/mon-site-egypte/pages/merenre-i.html',
            '/mon-site-egypte/pages/merneith.html',
            '/mon-site-egypte/pages/mythologie.html',
            '/mon-site-egypte/pages/mythologie-detaillee.html',
            '/mon-site-egypte/pages/narmer.html',
            '/mon-site-egypte/pages/nebre-ou-raneb.html',
            '/mon-site-egypte/pages/neferirkare-kakaii.html',
            '/mon-site-egypte/pages/niouserre.html',
            '/mon-site-egypte/pages/nynetjer.html',
            '/mon-site-egypte/pages/ounas.html',
            '/mon-site-egypte/pages/ouserkaf.html',
            '/mon-site-egypte/pages/osiris.html',
            '/mon-site-egypte/pages/isis.html',
            '/mon-site-egypte/pages/horus.html',
            '/mon-site-egypte/pages/anubis.html',
            '/mon-site-egypte/pages/apophis.html',
            '/mon-site-egypte/pages/pantheon-dieux.html',
            '/mon-site-egypte/pages/pepi-i.html',
            '/mon-site-egypte/pages/pepi-ii.html',
            '/mon-site-egypte/pages/peribsen.html',
            '/mon-site-egypte/pages/periodes-intermediaires.html',
            '/mon-site-egypte/pages/pharaons.html',
            '/mon-site-egypte/pages/pouvoir-royal.html',
            '/mon-site-egypte/pages/premiere-periode-intermediaire.html',
            '/mon-site-egypte/pages/qa.html',
            '/mon-site-egypte/pages/ra.html',
            '/mon-site-egypte/pages/RamsesII.html',
            '/mon-site-egypte/pages/religion-funeraire.html',
            '/mon-site-egypte/pages/sahoure.html',
            '/mon-site-egypte/pages/sekhemkhet.html',
            '/mon-site-egypte/pages/semerkhet.html',
            '/mon-site-egypte/pages/shepseskaf.html',
            '/mon-site-egypte/pages/snefrou.html',
            '/mon-site-egypte/pages/teti.html',
            '/mon-site-egypte/pages/troisieme-periode-intermediaire.html',
            '/mon-site-egypte/pages/vie-quotidienne.html',
            '/mon-site-egypte/pages/thot.html',
            '/mon-site-egypte/pages/seth.html',
            '/mon-site-egypte/pages/amon-re.html',
            '/mon-site-egypte/pages/mythe-creation.html',
            '/mon-site-egypte/projet-spirituelles/index.html',
            '/mon-site-egypte/projet-spirituelles/anges-kabbale-guide.html',
            '/mon-site-egypte/projet-spirituelles/astrologie-exploration.html',
            '/mon-site-egypte/projet-spirituelles/chiromancie-guide.html',
            '/mon-site-egypte/projet-spirituelles/guide-tirages-cartes.html',
            '/mon-site-egypte/projet-spirituelles/guides-chamanisme.html',
            '/mon-site-egypte/projet-spirituelles/guides-spirituels-intuition.html',
            '/mon-site-egypte/projet-spirituelles/intuition-nature-mecanismes.html',
            '/mon-site-egypte/projet-spirituelles/synchronicite-hasard-sens.html',
            '/mon-site-egypte/projet-spirituelles/these-planches-pendule.html'
        ];

        let resultsFound = false;
        const normalizedQuery = normalizeString(query);

        for (const page of pagesToSearch) {
            try {
                const response = await fetch(page);
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const pageTitle = doc.querySelector('title').textContent;
                const pageContent = doc.body.innerText;

                if (normalizeString(pageContent).includes(normalizedQuery)) {
                    resultsFound = true;
                    const resultElement = document.createElement('div');
                    resultElement.className = 'search-result';
                    resultElement.innerHTML = `
                        <h3><a href="${page}">${pageTitle}</a></h3>
                        <p>...${getSnippet(pageContent, query)}...</p>
                    `;
                    resultsContainer.appendChild(resultElement);
                }
            } catch (error) {
                console.error(`Erreur lors de la recherche dans la page ${page}:`, error);
            }
        }

        if (!resultsFound) {
            noResultsElement.style.display = 'block';
        }
    }

    function getSnippet(content, query, length = 200) {
        const lowerContent = content.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerContent.indexOf(lowerQuery);

        if (index === -1) {
            return content.substring(0, length);
        }

        const start = Math.max(0, index - Math.floor(length / 2));
        const end = Math.min(content.length, start + length);
        const snippet = content.substring(start, end);

        // Mettre en surbrillance le terme recherché
        const highlightedSnippet = snippet.replace(new RegExp(query, 'ig'), (match) => `<strong>${match}</strong>`);

        return highlightedSnippet;
    }
});