let expression = '';

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!expression.includes('.')) {
    expression += '.';
  }
  updateDisplay();
}

function toggleSign() {
  if (expression.startsWith('-')) {
    expression = expression.substring(1);
  } else {
    expression = '-' + expression;
  }
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculatePercentage() {
  const percentage = parseFloat(expression) / 100;
  expression = percentage.toString();
  updateDisplay();
}

function calculate() {
  const result = eval(expression);

  if (Number.isNaN(result)) {
    alert('Erro na expressão!');
    clearDisplay();
  } else {
    expression = result.toString();
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}

// keyboar reconinition

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;
  
  if (isNumberKey(key)) {
    appendNumber(key);
  } else if (isOperatorKey(key)) {
    appendOperator(key);
  } else if (key === '.') {
    appendDecimal();
  } else if (key === '%') {
    calculatePercentage();
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
}

function isNumberKey(key) {
  return /^[0-9]$/.test(key);
}

function isOperatorKey(key) {
  return /^[\+\-\*\/]$/.test(key);
}