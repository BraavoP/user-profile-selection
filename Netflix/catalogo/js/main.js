import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Apply theme
    const preferredTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(preferredTheme);

    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
