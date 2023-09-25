function isPalindrome(string) {
  // Write your code here.
  let endIdx = string.length - 1;
  let startIdx = 0;

  while (endIdx >= startIdx) {
    if (string.charAt(startIdx) !== string.charAt(endIdx)) return false;

    endIdx--;
    startIdx++;
  }

  return true;
}
