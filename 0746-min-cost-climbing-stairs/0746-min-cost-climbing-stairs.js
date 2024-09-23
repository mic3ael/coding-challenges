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

var minCostClimbingStairs = function(cost) {
    const index = cost.length;
    const memo = new Map();
    return Math.min(minCost(cost, index - 1, memo), minCost(cost, index - 2, memo));
}

function minCost(cost, index, memo){
    if(index < 2) return cost[index];
    if(memo.has(index)) return memo.get(index);

    const val = cost[index] + Math.min(minCost(cost, index - 1, memo), minCost(cost, index - 2, memo));
    memo.set(index, val);
    return val;
}