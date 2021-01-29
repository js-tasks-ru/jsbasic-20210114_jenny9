/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {string}  объект
 */
function getMinMax(str) {
  let arr = str
    .match(/[+-]?\d+(?:\.\d+)?/g)
    .sort((a, b) => a - b);

  return {
    min: +arr[0],
    max: +arr[arr.length - 1]
  };
}
