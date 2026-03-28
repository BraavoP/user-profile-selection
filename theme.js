const themeToggle = document.getElementById('theme-toggle');
const preferredTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
   document.body.classList.remove('light', 'dark');
   document.body.classList.add(theme);
   themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro');
   themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
   themeToggle.classList.toggle('dark', theme === 'dark');
   localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
   const current = document.body.classList.contains('dark') ? 'dark' : 'light';
   applyTheme(current === 'dark' ? 'light' : 'dark');
});

applyTheme(preferredTheme);
