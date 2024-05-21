class Solution {
  // time: O((n) * m), space(1) -> n - str1, m - str2
  findFirstOccurrence(str1, str2) {
    if (str1.length < str2.length) return -1;
    if (str2.length == 0) return 0;

    for (let i = 0; i < str1.length; i++) {
      let j = 0;
      if (str1[i] != str2[j]) {
        continue;
      }
      const start = i;
      while (i < str1.length && str1[i] == str2[j]) {
        i++;
        j++;
      }
      if (j == str2.length) return start;
      else i = start;
    }

    return -1; // Return -1 if no match is found
  }
}

const s = new Solution();
console.log(s.findFirstOccurrence('overlapping', 'ping'));
