class Solution {
  // time: O(n*logn), space: O(1/logn) -> the space depends on the sorting algo
  maxLeftover(prices, money) {
    if (prices.length < 2) return money;
    prices.sort((a, b) => a - b);
    const diff = money - prices[0] - prices[1];

    if (diff < 0) return money;

    return diff;
  }
}
