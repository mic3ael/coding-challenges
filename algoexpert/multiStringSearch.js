class SearchEngine {
  constructor(text) {
    this.root = {};
    this.endSymbol = '*';
    this.#index(text);
  }
  #index(text) {
    for (let i = 0; i < text.length; i++) {
      const subString = text.substring(i);
      let current = this.root;
      for (const char of subString) {
        if (!Object.hasOwn(current, char)) current[char] = {};
        current = current[char];
      }
      current[this.endSymbol] = true;
    }
  }
  contains(word) {
    let current = this.root;
    for (const char of word) {
      if (!Object.hasOwn(current, char)) {
        return false;
      }
      current = current[char];
    }
    return true;
  }
}
// time: O(n*s + bs), space(ns) - where n is the number of small strings, s is the length of longest small string, and b is the length of big string.
function multiStringSearch(bigString, smallStrings) {
  const searchEngine = new SearchEngine(bigString);
  const contains = [];
  for (const word of smallStrings) {
    contains.push(searchEngine.contains(word));
  }
  return contains;
}
