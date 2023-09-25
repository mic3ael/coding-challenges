function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;
  let firstIdx = 0;
  let secondIdx = 0;
  let editMode = false;

  while (secondIdx < stringTwo.length && firstIdx < stringOne.length) {
    if (stringOne.charAt(firstIdx) !== stringTwo.charAt(secondIdx)) {
      if (editMode) return false;
      editMode = true;
      if (stringTwo.length < stringOne.length) firstIdx++;
      else if (stringTwo.length > stringOne.length) secondIdx++;
      else {
        firstIdx++;
        secondIdx++;
      }
    } else {
      firstIdx++;
      secondIdx++;
    }
  }

  return true;
}
