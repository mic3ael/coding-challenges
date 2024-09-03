/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

var numOfMinutes = function(n, headID, manager, informTime) {
    const organization = new Map();
    
    for(let i = 0; i < n; i++)
        organization.set(i, []);

    for(let i = 0; i < manager.length; i++){
        if(manager[i] == -1) continue;
        organization.get(manager[i]).push(i);
    }

    return dfs(headID, organization, informTime);
}

function dfs(manager, organization, informTime){
    const employees = organization.get(manager);
    if(employees.length == 0) return informTime[manager];
    let max = 0;
    for(let i = 0; i < employees.length; i++){
        max = Math.max(dfs(employees[i], organization, informTime), max);
    }
    return max + informTime[manager];
}