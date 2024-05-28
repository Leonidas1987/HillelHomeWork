// ДЗ 6.1. Свій padEnd/padStart
function pad(str, char, length, padStart) {
  // Перевірка, скільки символів необхідно додати
  const addLength = Math.max(0, length - str.length);

  // Створення рядка з символів для додавання
  const padding = char.repeat(addLength);

  // Додавання символів в залежності від параметра padStart
  if (padStart) {
    return padding + str;
  } else {
    return str + padding;
  }
}
console.log(pad("HomeWork", "+", 7, true)); // HomeWork

// ДЗ 6.2. Своя функція NaN
function isNaN(value) {
  // Перевірка на числове значення
  return typeof value === "number" && value !== value;
}
// Приклади використання
console.log(isNaN("hillel")); // false
console.log(isNaN(undefined)); // false
console.log(isNaN({})); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(1987)); // false
console.log(isNaN("2024")); // false

// ДЗ 6.3. Теорія ймовірності
function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  // Генерація випадкових чисел та підрахунок парних і непарних
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  // Обчислення відсоткового співвідношення
  const evenPercentage = (evenCount / count) * 100;
  const oddPercentage = (oddCount / count) * 100;

  // Виведення інформації
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Непарних чисел: ${oddCount}`);
  console.log(
    `Відсоток парних до непарних: ${evenPercentage.toFixed(
      2
    )}% / ${oddPercentage.toFixed(2)}%`
  );
}
// Приклад використання
checkProbabilityTheory(1000);
