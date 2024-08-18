/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let leftIdx = 0;
  let rightIdx = 0;
  let startModifyIdx = 0;

  while (rightIdx < chars.length) {
    if (chars[leftIdx] != chars[rightIdx]) {
      startModifyIdx = compression(chars, leftIdx, rightIdx, startModifyIdx);
      leftIdx = rightIdx;
    }
    rightIdx++;
  }

  const idx = compression(chars, leftIdx, rightIdx, startModifyIdx);
  return idx;
};

function compression(chars, leftIdx, rightIdx, startModifyIdx) {
  let diff = rightIdx - leftIdx;
  chars[startModifyIdx] = chars[leftIdx];
  startModifyIdx++;
  if (diff > 1) {
    diff = diff.toString();
    let i = 0;
    while (i < diff.length) {
      chars[startModifyIdx + i] = diff.charAt(i);
      i++;
    }

    return startModifyIdx + i;
  }
  return startModifyIdx;
}