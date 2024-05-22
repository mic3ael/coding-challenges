class Solution {
  // time: O(n), space: O(1)
  maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) totalProfit += prices[i] - prices[i - 1];
    }
    return totalProfit;
  }
}
