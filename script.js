(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (!toggle) return;

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') root.dataset.theme = 'dark';
  const updateToggle = () => {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  };
  updateToggle();
  toggle.addEventListener('click', () => {
    if (root.dataset.theme === 'dark') {
      delete root.dataset.theme;
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      root.dataset.theme = 'dark';
      localStorage.setItem('portfolio-theme', 'dark');
    }
    updateToggle();
  });
})();
