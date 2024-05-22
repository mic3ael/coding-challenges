class Solution {
  //time: O(n), space: O(n)
  findOriginalArray(changed) {
    if (changed.length % 2 != 0) return [];
    const original = [];
    const occurances = {};
    for (let i = 0; i < changed.length; i++) {
      if (!occurances.hasOwnProperty(changed[i])) {
        occurances[changed[i]] = 0;
      }
      occurances[changed[i]] = occurances[changed[i]] + 1;
    }

    for (let i = 0; i < changed.length; i++) {
      if (!occurances.hasOwnProperty(changed[i] / 2)) {
        continue;
      }

      if (occurances[changed[i] / 2] <= 0) {
        continue;
      }
      if (occurances[changed[i]] <= 0) continue;
      occurances[changed[i]] = occurances[changed[i]] - 1;
      occurances[changed[i] / 2] = occurances[changed[i] / 2] - 1;
      original.push(changed[i] / 2);
    }

    return original;
  }
}

const s = new Solution();

console.log(s.findOriginalArray([2, 4, 1, 8]));
console.log(s.findOriginalArray([7, 14, 28]));
