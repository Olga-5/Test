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

const cellStartValue = document.querySelector('.start-value');
const cellPercent = document.querySelector('.percent');
const cellFirstResult = document.querySelector('.result-first');
const cellSecondResult = document.querySelector('.result-second');
const cellThirdResult = document.querySelector('.result-third');

let startValue = 0;
let percentValue = 0;

const calc = (value, percentValue) => {
  const persent = value * percentValue / 100;
  return value + persent;
}

const changeCellsData = () => {
  const firstResult = calc(startValue, percentValue);
  const secondResult = calc(firstResult, percentValue);
  const thirdResult = calc(secondResult, percentValue);

  cellFirstResult.innerHTML = firstResult;
  cellSecondResult.innerHTML = secondResult;
  cellThirdResult.innerHTML = thirdResult;
}

cellStartValue.addEventListener('input', (event) => {
  startValue = event.target.value === '' ? 0 : parseFloat(event.target.value);
  changeCellsData();
});

cellPercent.addEventListener('input', (event) => {
  percentValue = event.target.value === '' ? 0 : parseFloat(event.target.value);
  changeCellsData();
});