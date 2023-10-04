// time: O(n), space(n) - where n is the length of the string
function runLengthEncoding(string) {
  let count = 1;
  let prev = string.charAt(0);
  let result = '';
  for (let i = 1; i < string.length; i++) {
    const char = string.charAt(i);
    if (count % 9 === 0) {
      result += `${count}${prev}`;
      count = 1;
      prev = char;
      continue;
    }
    if (prev === char) count++;
    else {
      result += `${count}${prev}`;
      count = 1;
      prev = char;
    }
  }

  result += `${count}${prev}`;

  return result;
}
