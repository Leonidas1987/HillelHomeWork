// ДЗ 10.1. Без А

const regex = /^(?!.*[aA]).{6,}$/;
console.log(regex.test("HELLO!")); // true (6 символів, немає "A" або "a")
console.log(regex.test("h3LL0!")); // true (6 символів, немає "A" або "a")
console.log(regex.test("hello!")); // false (лише 6 символів, але є "а")
console.log(regex.test("hello1")); // true (6 символів, немає "A" або "a")
console.log(regex.test("helloo")); // true (6 символів, немає "A" або "a")
console.log(regex.test("ABCDEFG")); // false (є "A")
console.log(regex.test("aBcdefgh")); // false (є "a")
console.log(regex.test("1234567890")); // true (10 символів, немає "A" або "a")

// ДЗ 10.2. Параноя

var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Sherstyuk",
    email: "dmitro.sherstyuk@yahoo.com",
  },
  {
    userName: "lEON",
    lastName: "",
    email: "lEON@mail.ru", // Нам такі не підходять
  },
];

const trustedEmails = [];
const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

for (let i = 0; i < arr.length; i++) {
  if (emailRegex.test(arr[i].email)) {
    trustedEmails.push(arr[i].email);
  }
}

console.log(trustedEmails); // Маэ бути: ['test.test@gmail.com', 'dmitro.sherstyuk@yahoo.com']
