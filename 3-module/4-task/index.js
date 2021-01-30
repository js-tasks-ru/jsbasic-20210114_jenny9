/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = "";
  for (const user of users) {
    if (user.age <= age) {
      result += `${user.name}, ${user.balance}\n`;
    }
  }
  return result.slice(0, -1);
}
