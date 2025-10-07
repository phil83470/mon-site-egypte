document.addEventListener('DOMContentLoaded', function () {
    const directRedirects = {
        'ramsesii': '/pages/RamsesII.html',
        'pharaons': '/pages/pharaons.html',
        'mythologie': '/pages/mythologie.html',
        'mythologiedetaillee': '/pages/mythologie-detaillee.html',
        'pantheondieux': '/pages/pantheon-dieux.html',
        'religionfuneraire': '/pages/religion-funeraire.html',
        'djoser': '/pages/Djoser.html',
        'sekhemkhet': '/pages/sekhemkhet.html',
        'khaba': '/pages/Khaba.html',
        'houni': '/pages/Houni.html',
        'snefrou': '/pages/snefrou.html',
        'khoufou': '/pages/khoufou.html',
        'djedefre': '/pages/djedefre.html',
        'khephren': '/pages/khafre.html',
        'khafre': '/pages/khafre.html',
        'baka': '/pages/baka.html',
        'menkaoure': '/pages/menkaoure.html',
        'shepseskaf': '/pages/shepseskaf.html',
        'djedefptah': '/pages/djedefptah.html',
        'hotepsekhemouy': '/pages/hotepsekhemouy.html',
        'nebreouraneb': '/pages/nebre-ou-raneb.html',
        'nynetjer': '/pages/nynetjer.html',
        'peribsen': '/pages/peribsen.html',
        'khasekhemouy': '/pages/khasekhemouy.html',
        'ouserkaf': '/pages/ouserkaf.html',
        'sahoure': '/pages/sahoure.html',
        'neferirkarekakaii': '/pages/neferirkare-kakaii.html',
        'niouserre': '/pages/niouserre.html',
        'ounas': '/pages/ounas.html',
        'premiereperiodeintermediaire': '/pages/premiere-periode-intermediaire.html',
        'deuxiemeperiodeintermediaire': '/pages/deuxieme-periode-intermediaire.html',
        'troisiemeperiodeintermediaire': '/pages/troisieme-periode-intermediaire.html',
        'ra': '/pages/ra.html',
        're': '/pages/ra.html',
        'osiris': '/pages/osiris.html',
        'isis': '/pages/isis.html',
        'thot': '/pages/thot.html',
        'seth': '/pages/seth.html',
        'amon-re': '/pages/amon-re.html',
        'amonre': '/pages/amon-re.html',
        'mythecreation': '/pages/mythe-creation.html',

        // Dynasties
        '1eredynastie': '/pages/dynastie1.html',
        'premieredynastie': '/pages/dynastie1.html',
        'dynastie1': '/pages/dynastie1.html',
        '2emedynastie': '/pages/dynastie2.html',
        'deuxiemedynastie': '/pages/dynastie2.html',
        'dynastie2': '/pages/dynastie2.html',
        '3emedynastie': '/pages/dynastie3.html',
        'troisiemedynastie': '/pages/dynastie3.html',
        'dynastie3': '/pages/dynastie3.html',
        '4emedynastie': '/pages/dynastie4.html',
        'quatriemedynastie': '/pages/dynastie4.html',
        'dynastie4': '/pages/dynastie4.html',
        '5emedynastie': '/pages/dynastie5.html',
        'cinquiemedynastie': '/pages/dynastie5.html',
        'dynastie5': '/pages/dynastie5.html',
        '6emedynastie': '/pages/dynastie6.html',
        'sixiemedynastie': '/pages/dynastie6.html',
        'dynastie6': '/pages/dynastie6.html',
        '7emedynastie': '/pages/dynastie7.html',
        'septiemedynastie': '/pages/dynastie7.html',
        'dynastie7': '/pages/dynastie7.html',
        '8emedynastie': '/pages/dynastie8.html',
        'huitiemedynastie': '/pages/dynastie8.html',
        'dynastie8': '/pages/dynastie8.html',
        '9emedynastie': '/pages/dynastie9.html',
        'neuviemedynastie': '/pages/dynastie9.html',
        'dynastie9': '/pages/dynastie9.html',
        '10emedynastie': '/pages/dynastie10.html',
        'dixiemedynastie': '/pages/dynastie10.html',
        'dynastie10': '/pages/dynastie10.html',
        '11emedynastie': '/pages/dynastie11.html',
        'onziemedynastie': '/pages/dynastie11.html',
        'dynastie11': '/pages/dynastie11.html',
        '12emedynastie': '/pages/dynastie12.html',
        'douziemedynastie': '/pages/dynastie12.html',
        'dynastie12': '/pages/dynastie12.html',
        '18emedynastie': '/pages/dynastie18.html',
        'dixhuitiemedynastie': '/pages/dynastie18.html',
        'dynastie18': '/pages/dynastie18.html',
        '19emedynastie': '/pages/dynastie19.html',
        'dixneufiemedynastie': '/pages/dynastie19.html',
        'dynastie19': '/pages/dynastie19.html',
        'spiritualite': '/projet-spirituelles/index.html',
        'portailspirituel': '/projet-spirituelles/index.html',
        'angeskabbale': '/projet-spirituelles/anges-kabbale-guide.html',
        'astrologie': '/projet-spirituelles/astrologie-exploration.html',
        'chiromancie': '/projet-spirituelles/chiromancie-guide.html',
        'tiragecartes': '/projet-spirituelles/guide-tirages-cartes.html',
        'chamanisme': '/projet-spirituelles/guides-chamanisme.html',
        'guidesspirituels': '/projet-spirituelles/guides-spirituels-intuition.html',
        'intuition': '/projet-spirituelles/intuition-nature-mecanismes.html',
        'synchronicite': '/projet-spirituelles/synchronicite-hasard-sens.html',
        'pendule': '/projet-spirituelles/these-planches-pendule.html'
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
            '/index.html',
            '/contact.html',
            '/pages/adjib.html',
            '/pages/archeologie.html',
            '/pages/architecture-urbanisme.html',
            '/pages/baka.html',
            '/pages/bibliographie.html',
            '/pages/den.html',
            '/pages/deuxieme-periode-intermediaire.html',
            '/pages/djedefptah.html',
            '/pages/djedefre.html',
            '/pages/djer.html',
            '/pages/Djeser.html',
            '/pages/djet.html',
            '/pages/dynastie1.html',
            '/pages/dynastie10.html',
            '/pages/dynastie11.html',
            '/pages/dynastie12.html',
            '/pages/dynastie18.html',
            '/pages/dynastie19.html',
            '/pages/dynastie2.html',
            '/pages/dynastie3.html',
            '/pages/dynastie4.html',
            '/pages/dynastie5.html',
            '/pages/dynastie6.html',
            '/pages/dynastie7.html',
            '/pages/dynastie8.html',
            '/pages/dynastie9.html',
            '/pages/dynasties.html',
            '/pages/egyptebriefing.html',
            '/pages/hor-aha.html',
            '/pages/hotepsekhemouy.html',
            '/pages/Houni.html',
            '/pages/Khaba.html',
            '/pages/khafre.html',
            '/pages/khasekhemouy.html',
            '/pages/khoufou.html',
            '/pages/menkaoure.html',
            '/pages/merenre-i.html',
            '/pages/merneith.html',
            '/pages/mythologie.html',
            '/pages/mythologie-detaillee.html',
            '/pages/narmer.html',
            '/pages/nebre-ou-raneb.html',
            '/pages/neferirkare-kakaii.html',
            '/pages/niouserre.html',
            '/pages/nynetjer.html',
            '/pages/ounas.html',
            '/pages/ouserkaf.html',
            '/pages/osiris.html',
            '/pages/isis.html',
            '/pages/horus.html',
            '/pages/anubis.html',
            '/pages/apophis.html',
            '/pages/pantheon-dieux.html',
            '/pages/pepi-i.html',
            '/pages/pepi-ii.html',
            '/pages/peribsen.html',
            '/pages/periodes-intermediaires.html',
            '/pages/pharaons.html',
            '/pages/pouvoir-royal.html',
            '/pages/premiere-periode-intermediaire.html',
            '/pages/qa.html',
            '/pages/ra.html',
            '/pages/RamsesII.html',
            '/pages/religion-funeraire.html',
            '/pages/sahoure.html',
            '/pages/sekhemkhet.html',
            '/pages/semerkhet.html',
            '/pages/shepseskaf.html',
            '/pages/snefrou.html',
            '/pages/teti.html',
            '/pages/troisieme-periode-intermediaire.html',
            '/pages/vie-quotidienne.html',
            '/pages/thot.html',
            '/pages/seth.html',
            '/pages/amon-re.html',
            '/pages/mythe-creation.html',
            '/projet-spirituelles/index.html',
            '/projet-spirituelles/anges-kabbale-guide.html',
            '/projet-spirituelles/astrologie-exploration.html',
            '/projet-spirituelles/chiromancie-guide.html',
            '/projet-spirituelles/guide-tirages-cartes.html',
            '/projet-spirituelles/guides-chamanisme.html',
            '/projet-spirituelles/guides-spirituels-intuition.html',
            '/projet-spirituelles/intuition-nature-mecanismes.html',
            '/projet-spirituelles/synchronicite-hasard-sens.html',
            '/projet-spirituelles/these-planches-pendule.html'
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