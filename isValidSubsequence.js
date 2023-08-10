function isValidSubsequence(array, sequence) {
  let sIndex = 0;
  for (const val of array) {
    if (sequence[sIndex] === val) {
      sIndex++;
    }
  }

  return sIndex >= sequence.length;
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
