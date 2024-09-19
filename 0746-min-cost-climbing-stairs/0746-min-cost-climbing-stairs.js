/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
     if (cost.length < 2) return -1;
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const element = cost[i];
        const current = element + Math.min(first, second);
        first = second;
        second = current;
    }

    return Math.min(first, second);
};