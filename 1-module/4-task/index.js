/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  function checkSpam(str){
    let lowStr = str.toLowerCase();

    if (str.length === 0){
      return false;
    } else if (lowStr.includes("1xbet") || (lowStr.includes("xxx"))) {
      return true;
    } else {
      return false;
    }
  }

}
