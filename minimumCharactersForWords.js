function minimumCharactersForWords(words) {
  const allChars = new Map();

  for (const word of words) {
    const chars = new Map();
    for (const c of word) {
      if (!chars.has(c)) chars.set(c, 0);
      chars.set(c, chars.get(c) + 1);
    }

    chars.forEach((count, char) => {
      if (!allChars.has(char)) allChars.set(char, count);
      else allChars.set(char, Math.max(allChars.get(char), count));
    });
  }

  const result = [];
  allChars.forEach((count, char) => {
    for (let i = 0; i < count; i++) result.push(char);
  });

  return result;
}
