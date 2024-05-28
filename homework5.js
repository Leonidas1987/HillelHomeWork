// ДЗ 7.1. Робота з обьектом
// Створюємо об'єкт з трьома властивостями
const obj = {
  name: "Leon",
  age: 37,
  profession: "Qa-Engineer",
  // Метод для виведення всіх властивостей об'єкта
  getInfo: function () {
    for (let key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },
};
// Виклик методу getInfo
obj.getInfo();

// Додаємо нову властивість
obj.newProperty = "New name";
// Знову викликаємо метод getInfo
obj.getInfo();

// ДЗ 7.2. Сума вартості послуг
var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  // Метод для обчислення загальної вартості послуг
  price: function () {
    let total = 0;
    for (let key in this) {
      if (
        this.hasOwnProperty(key) &&
        typeof this[key] === "string" &&
        this[key].includes("грн")
      ) {
        total += parseFloat(this[key]);
      }
    }
    return total + " грн";
  },
  // Метод для пошуку мінімальної вартості послуги
  minPrice: function () {
    let min = Infinity;
    for (let key in this) {
      if (
        this.hasOwnProperty(key) &&
        typeof this[key] === "string" &&
        this[key].includes("грн")
      ) {
        let price = parseFloat(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min + " грн";
  },
  // Метод для пошуку максимальної вартості послуги
  maxPrice: function () {
    let max = -Infinity;
    for (let key in this) {
      if (
        this.hasOwnProperty(key) &&
        typeof this[key] === "string" &&
        this[key].includes("грн")
      ) {
        let price = parseFloat(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max + " грн";
  },
};
// Додавання нової послуги
services["Розбити скло"] = "200 грн";
// Виклик методів
console.log("Загальна вартість послуг: " + services.price()); // Виведе: "Загальна вартість послуг: 440 грн"
console.log("Мінімальна вартість послуги: " + services.minPrice()); // Виведе: "Мінімальна вартість послуги: 60 грн"
console.log("Максимальна вартість послуги: " + services.maxPrice()); // Виведе: "Максимальна вартість послуги: 200 грн"
