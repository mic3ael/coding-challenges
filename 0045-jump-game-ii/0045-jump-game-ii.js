/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const adjList = new Array(nums.length);
    for(let i = 0; i < adjList.length; i++)
        adjList[i] = [];

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        let j = 0;
        while(j < num) {
            const next = j + i + 1;
            if(next < nums.length)
                adjList[i].push(next);
            j++;
        }
    }

    const min = dfs(0, adjList);
    return min;
};

function dfs(index, adjList){
    if(index >= adjList.length - 1) return 0;
    
    const options = adjList[index];
    let min = adjList.length;

    // if(seen.has(index)) return seen.get(index);

    for(let i = 0; i < options.length; i++){
        min = Math.min(dfs(options[i], adjList), min);
    }

    // seen.set(index, min + 1);
    return min + 1;
}