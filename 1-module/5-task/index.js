/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  let result;
  if (str.length <= maxlength){
    return str;
  } else {
    result = str.substr(0, 19) + "…";
    return result;
  }
}
