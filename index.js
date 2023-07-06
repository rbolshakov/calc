const numberFirst = document.querySelector('.number_first');
const numberSecond = document.querySelector('.number_second');
const btnSelect = document.querySelector('.select');
const btnResult = document.querySelector('.btn');
const resultArea = document.querySelector('.result');

btnResult.addEventListener('click', function () {
  const a = Number(numberFirst.value);
  const b = Number(numberSecond.value);
  const operation = btnSelect.value;

  const result = calc(a, b, operation);
  resultArea.innerHTML = result
})

function calc(a, b, operation) {
  if (operation == '+') {
    return a + b;
  }
  else if (operation == '-') {
    return a - b;
  }
  else if (operation == '/') {
    return a / b;
  }
  else if (operation == '*') {
    return a * b;
  }
}