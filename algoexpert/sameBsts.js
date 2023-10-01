// time: O(n^2), space: O(n^2) - where n is the length of the arrays - // There is a better solution with optimized space complexity
function sameBsts(arrayOne, arrayTwo) {
  if (!arrayOne.length && !arrayTwo.length) return true;
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne[0] !== arrayTwo[0]) return false;

  const root = arrayOne.shift();
  arrayTwo.shift();

  const [arrOneSmaller, arrOneGreater] = greaterOrEqualAndSmallerThanRoot(
    root,
    arrayOne
  );
  const [arrTwoSmaller, arrTwoGreater] = greaterOrEqualAndSmallerThanRoot(
    root,
    arrayTwo
  );

  const smallerResult = sameBsts(arrOneSmaller, arrTwoSmaller);
  const greaterResult = sameBsts(arrOneGreater, arrTwoGreater);

  return smallerResult === true && greaterResult === true;
}

function greaterOrEqualAndSmallerThanRoot(root, array) {
  const smaller = [];
  const greater = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] < root) smaller.push(array[i]);
    else greater.push(array[i]);

  return [smaller, greater];
}
