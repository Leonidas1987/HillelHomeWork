// ДЗ 9.1. Тусувати масив
function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
// Приклад визову
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);

// ДЗ 9.2. BigBoss
const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};
function findValueByKey(companyObj, companyName) {
  if (companyObj.name === companyName) {
    return companyObj;
  }
  if (companyObj.clients) {
    for (let client of companyObj.clients) {
      const found = findValueByKey(client, companyName);
      if (found) {
        return found;
      }
    }
  }
  if (companyObj.partners) {
    for (let partner of companyObj.partners) {
      const found = findValueByKey(partner, companyName);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
// Приклад
const result = findValueByKey(company, "Клієнт 1.2.3");
console.log(result);
