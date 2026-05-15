(function () {
  const html = document.documentElement;

  // Apply saved theme before first paint (also set in <head> inline, this is a fallback)
  html.dataset.theme = localStorage.getItem('theme') || 'dark';

  function updateActive() {
    const page  = html.dataset.page;
    const theme = html.dataset.theme;
    document.querySelectorAll('.g-ctrl__seg[data-go]').forEach(b =>
      b.classList.toggle('is-active', b.dataset.go === page));
    document.querySelectorAll('.g-ctrl__seg[data-go-theme]').forEach(b =>
      b.classList.toggle('is-active', b.dataset.goTheme === theme));
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.g-ctrl__seg[data-go]').forEach(btn =>
      btn.addEventListener('click', () => {
        window.location.href = btn.dataset.go === 'terminal' ? 'index.html' : 'classic.html';
      }));

    document.querySelectorAll('.g-ctrl__seg[data-go-theme]').forEach(btn =>
      btn.addEventListener('click', () => {
        html.dataset.theme = btn.dataset.goTheme;
        localStorage.setItem('theme', btn.dataset.goTheme);
        updateActive();
      }));

    updateActive();
  });
})();
