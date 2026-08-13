(function () {
  const html = document.documentElement;

  html.dataset.theme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function updatePhoto(theme) {
    const photo = document.getElementById('about-photo');
    if (photo) photo.src = theme === 'light' ? 'light.jpg' : 'dark.jpg';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
      html.dataset.theme = next;
      localStorage.setItem('theme', next);
      updatePhoto(next);
    });

    updatePhoto(html.dataset.theme);
  });
})();
