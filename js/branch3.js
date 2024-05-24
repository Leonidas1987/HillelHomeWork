// ДЗ 5.1. Ялинка
let height = 5; // Висота трикутника
let symbol = "*"; // Символ для малювання

for (let i = 1; i <= height; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += symbol;
  }
  console.log(line);
}

// ДЗ 5.2. Кратність чисел
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    sum += i;
  }
}
console.log("Сума чисел вiд 1 до 100,не кратнI 3,рiвно:", sum);

// ДЗ 5.3. Написати функцію pow
function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
// Приклад виклику функції
console.log(pow(4, 2)); // Виведе: 8
console.log(pow(5, 2)); // Виведе: 25
