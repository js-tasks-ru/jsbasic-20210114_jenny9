/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    let item = salaries[key];
    if (parseInt(item)) {
      result += item;
    }
  }
  return result;
}
