function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo[n];
  }

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}

getNthFib(6);
