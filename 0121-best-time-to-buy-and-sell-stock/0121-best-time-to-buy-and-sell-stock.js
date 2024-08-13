/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mProfit = 0;
    let leftIdx = 0;
    let rightIdx = 0;

    while(rightIdx < prices.length){
        const profit = prices[rightIdx] - prices[leftIdx];
        if(profit < 0){
            leftIdx++;
            continue;
        } 
        
        rightIdx++;
        mProfit = Math.max(mProfit, profit);
    }
    
    return mProfit;
};