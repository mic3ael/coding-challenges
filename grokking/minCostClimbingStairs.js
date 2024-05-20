class Solution {
  // time: O(n), space: O(n)
  minCostClimbingStairs(cost) {
    if (cost.length < 2) return -1;

    const dp = new Array(cost.length);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
  }
  // time: O(nlogN), space: O(n)
  minCostClimbingStairs2(cost) {
    if (cost.length < 2) return;
    const queue = [
      { idx: 0, sum: cost[0] },
      { idx: 1, sum: cost[1] },
    ];
    let min = Number.MAX_SAFE_INTEGER;

    while (queue.length) {
      const { idx, sum } = queue.shift();

      if (idx + 1 >= cost.length) {
        min = Math.min(sum, min);
        continue;
      }

      queue.push({ idx: idx + 1, sum: sum + cost[idx + 1] });

      if (idx + 2 >= cost.length) {
        min = Math.min(sum, min);
        continue;
      }

      queue.push({ idx: idx + 2, sum: sum + cost[idx + 2] });
    }

    return min;
  }
}
