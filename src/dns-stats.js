const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  for (let el of domains) {
    let arr = el.split(".").reverse();
    let dom = "";
    for (let el of arr) {
      dom += "." + el;
      if (obj.hasOwnProperty(dom)) {
        obj[dom]++;
      } else {
        obj[dom] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};