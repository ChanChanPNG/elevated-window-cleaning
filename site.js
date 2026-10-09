const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu() { menu?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('open'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 1001px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
