function reverseWordsInString(string) {
  const words = [];
  let word = '';
  for (const c of string) {
    if (c === ' ') {
      words.unshift(word);
      words.unshift(c);
      word = '';
    } else word = word + c;
  }

  words.unshift(word);
  return words.join('');
}
