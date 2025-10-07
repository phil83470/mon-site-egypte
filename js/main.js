function handleSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `/search-results.html?query=${encodeURIComponent(query)}`;
    }
    return false; // Prevent form submission
}

$(document).ready(function(){
    

    // Injection de la navigation et du pied de page
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
        fetch('/nav.html')
            .then(response => response.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
                // Une fois la nav chargée, on attache les écouteeurs d'événements
                attachNavEventListeners();
            });
    }

    if (footerPlaceholder) {
        fetch('/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }

    function attachNavEventListeners() {
        // Menu hamburger
        const toggleButton = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu ul');
        if (toggleButton && menu) {
            toggleButton.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }

        // Contrôle de la musique
        const musicToggleBtn = document.getElementById("music-toggle-btn");
        if (musicToggleBtn) {
            const music = document.getElementById("background-music");
            if (music) {
                const musicIcon = musicToggleBtn.querySelector('img');

                if (musicIcon) {
                    musicIcon.src = music.paused ? '/images/generales/sistre-off.svg' : '/images/generales/sistre-on.svg';

                    musicToggleBtn.addEventListener("click", function() {
                        if (music.paused) {
                            music.play();
                            musicIcon.src = '/images/generales/sistre-on.svg';
                        } else {
                            music.pause();
                            musicIcon.src = '/images/generales/sistre-off.svg';
                        }
                    });

                    music.onpause = () => musicIcon.src = '/images/generales/sistre-off.svg';
                    music.onplay = () => musicIcon.src = '/images/generales/sistre-on.svg';
                }
            }
        }
    }

    // Réglage initial du volume de la musique de fond
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        backgroundMusic.volume = 0.1; // Réglez le volume ici (0.0 pour muet, 1.0 pour maximum)
    }
});

function ouvrirVideo(videoUrl) {
  window.open(
    videoUrl,
    "YouTubePopUp",
    "width=560,height=315"
  );
}