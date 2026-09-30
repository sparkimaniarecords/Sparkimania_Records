const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.right = '6%';
  nav.style.top = '65px';
  nav.style.flexDirection = 'column';
  nav.style.background = '#111';
  nav.style.padding = '18px';
  nav.style.border = '1px solid #292929';
});
