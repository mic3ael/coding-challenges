const open = new Map();
open.set('(', ')');
open.set('[', ']');
open.set('{', '}');
open.set('<', '>');

const close = new Map();
open.forEach((value, key) => close.set(value, key));

function balancedBrackets(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (!open.has(string.charAt(i)) && !close.has(string.charAt(i))) continue;
    if (open.has(string.charAt(i))) {
      stack.push(string.charAt(i));
      continue;
    }

    const lastOpen = stack.pop();
    if (close.get(string.charAt(i)) !== lastOpen) return false;
  }
  return stack.length ? false : true;
}

const result = balancedBrackets('([])(){}(())()()');
console.log('result: ', result);
