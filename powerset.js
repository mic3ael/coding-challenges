function powerset(array, i = null) {
  // Write your code here.
  if (i === null) {
    i = array.length - 1;
  }

  if (i < 0) {
    return [[]];
  }

  const val = array[i];
  const subsets = powerset(array, i - 1);
  const length = subsets.length;
  for (let j = 0; j < length; j++) {
    const currentSubset = subsets[j];
    subsets.push(currentSubset.concat(val));
  }

  return subsets;
}

powerset([1, 2, 3]);
