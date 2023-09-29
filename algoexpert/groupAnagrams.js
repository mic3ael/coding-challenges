// time: O(n * w * log(w)), space: O(n * w), where w is a length of the longest word
function groupAnagrams(words) {
  const sortedWords = words.map((w) => sortString(w));
  const apperances = new Map();

  sortedWords.forEach((w, index) => {
    if (!apperances.has(w)) {
      apperances.set(w, []);
    }
    apperances.get(w).push(index);
  });

  const anagrams = [];
  apperances.forEach((indexes) => {
    const anaWords = [];
    for (let i = 0; i < indexes.length; i++) anaWords.push(words[indexes[i]]);
    anagrams.push(anaWords);
  });

  return anagrams;
}

function sortString(str) {
  return [...str].sort((a, b) => a.localeCompare(b)).join('');
}
