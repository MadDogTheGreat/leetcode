/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    char1 = s.charAt(i);
    char2 = t.charAt(i);

    if (map.has(char1) == true) {
      if (map.get(char1) !== char2) {
        return false;
      }
    } else {
      if (set.has(char2)) {
        return false;
      }

      map.set(char1, char2);
      set.add(char2);
    }
  }
  return true;
};