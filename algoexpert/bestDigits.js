function bestDigits(number, numDigits) {
  const stack = [];
  let idx = 0;
  while (idx < number.length) {
    const num = Number(number.charAt(idx));
    while (stack.length && stack[stack.length - 1] <= num && numDigits > 0) {
      stack.pop();
      numDigits--;
    }
    stack.push(num);
    idx++;
  }

  while (numDigits > 0) {
    stack.pop();
    numDigits--;
  }

  return stack.join('');
}
