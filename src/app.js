const menu = document.getElementById('menulist');
const btnOpen = document.getElementById('menuopen');
const btnClose = document.getElementById('menuclose');

btnOpen.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

btnClose.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
