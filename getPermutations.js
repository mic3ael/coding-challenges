function getPermutations(array) {
  const perms = [];
  getPermutationsHelper(0, array, perms);
  
  return perms;
}

function getPermutationsHelper(i, array, perms) {
  if (array.length - 1 === i) return perms.push(Array.from(array));

  for (let j = i; j < array.length; j++) {
    swap(array, i, j);
    getPermutationsHelper(i + 1, array, perms);
    swap(array, i, j);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

getPermutations([1, 2, 3]);
