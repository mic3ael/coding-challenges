class Solution {
  // time: O(n), space: (n)
  reverseVowels(s) {
    const result = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let startIdx = 0;
    let endIdx = s.length - 1;
    while (startIdx < endIdx) {
      const leftChar = s.charAt(startIdx).toLowerCase();
      const rightChar = s.charAt(endIdx).toLowerCase();
      if (!vowels.has(leftChar)) startIdx++;
      if (!vowels.has(rightChar)) endIdx--;
      if (vowels.has(leftChar) && vowels.has(rightChar)) {
        this.#swap(result, startIdx, endIdx);
        startIdx++;
        endIdx--;
      }
    }
    return result.join('');
  }
  #swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
