/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
// var numOfMinutes2 = function(n, headID, manager, informTime) {
//     const organization = new Map();
    
//     for(let i = 0; i < n; i++)
//         organization.set(i, []);

//     for(let i = 0; i < manager.length; i++){
//         if(manager[i] == -1) continue;
//         organization.get(manager[i]).push(i);
//     }

//     // console.log({organization});

//     const queue = [[headID, organization.get(headID)]];
//     let nodesAtLevel = 1;
//     let currentMaxTimeLevel = 0;
//     let totalMinutes = 0;
    
//     while(queue.length){
//         const [manager, employees] = queue.shift();
//         nodesAtLevel--;
//         currentMaxTimeLevel = Math.max(informTime[manager], currentMaxTimeLevel);

//         for(let i = 0; i < employees.length; i++){
//             const nextManager = employees[i];
//             queue.push([nextManager, organization.get(nextManager)]);
//         }

//         if(nodesAtLevel == 0){
//             nodesAtLevel = queue.length;
//             totalMinutes += currentMaxTimeLevel;
//             currentMaxTimeLevel = 0;
//         }
//     }
 
//     return totalMinutes;
// };

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

    const times = employees.map(emp => dfs(emp, organization, informTime));
    return Math.max(...times) + informTime[manager];
}