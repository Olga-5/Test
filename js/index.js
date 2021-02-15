const toggle = document.querySelector('.content-toggle');
const overlay = document.querySelector('.main-overlay');
const content = document.querySelector('.main-content');
const table = document.querySelector('.table');
const gridTable = document.querySelector('.grid-table');

toggle.addEventListener('click', () => {
  overlay.classList.add('hide');
});

content.addEventListener('click', () => {
  overlay.classList.remove('hide');
});

table.addEventListener('click', (event) => {
  event.stopPropagation();
});

gridTable.addEventListener('click', (event) => {
  event.stopPropagation();
});