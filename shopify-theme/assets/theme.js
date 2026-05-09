document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  toggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });
});
