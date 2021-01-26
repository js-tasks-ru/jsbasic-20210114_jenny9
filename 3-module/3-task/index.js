/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (!str) {return str;}

  const result = [];
  const arr = str.split("-");

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (i > 0) {
      result.push(item[0].toUpperCase() + item.slice(1));
    } else {
      result.push(item);
    }
  }

  return result.join("");
}
