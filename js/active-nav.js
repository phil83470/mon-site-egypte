document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Normalise le chemin du lien pour correspondre au format de window.location.pathname
        // Ex: /pages/dynastie1.html ou /index.html
        let linkPath = new URL(link.href).pathname;

        // Gère le cas de la page d'accueil qui peut être / ou /index.html
        if (linkPath === '/' && currentPath === '/index.html') {
            link.classList.add('active');
        } else if (linkPath === '/index.html' && currentPath === '/') {
            link.classList.add('active');
        }
        // Gère les liens directs
        else if (currentPath.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        }

        // Pour les liens de sous-menu, active le parent "Dynasties" ou "Pharaons"
        if (link.closest('.dropdown-content') || link.closest('.submenu')) {
            if (currentPath.includes(linkPath)) {
                const parentDropdownToggle = link.closest('.dropdown').querySelector('.dropdown-toggle');
                if (parentDropdownToggle) {
                    parentDropdownToggle.classList.add('active');
                }
            }
        }
    });
});