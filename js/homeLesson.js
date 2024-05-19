let res = prompt("Скільки тобі років ?");
res = Number(res);
console.log(typeof res);
if (res <= 0) {
  console.log("ви ввіли число та це число є відємним");
}
if (res == 1 || res == 21 || res == 31 || res == 41 || res == 51 || res == 61) {
  console.log("рік");
} else if (
  (res >= 2 && res <= 4) ||
  (res >= 22 && res <= 24) ||
  (res >= 32 && res <= 34) ||
  (res >= 42 && res <= 44) ||
  (res >= 52 && res <= 54) ||
  (res >= 62 && res <= 64)
) {
  console.log("роки");
} else {
  console.log("років");
}
