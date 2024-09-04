/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const dag = new Array(numCourses).fill(0);
    const adjList = new Array(numCourses);
    
    for(let i = 0; i < adjList.length; i++)
        adjList[i] = new Array();
    
    for(let i = 0; i < prerequisites.length; i++) {
        const [course, pre] = prerequisites[i];
        dag[pre] += 1;
        adjList[course].push(pre);
    }

    const stack = [];
    for(let course = 0; course < dag.length; course++){
        if(dag[course] == 0) stack.push(course);
    }

    let count = 0;
    const flow = [];
    while(stack.length){
        const course = stack.pop();
        count++;
        flow.unshift(course);
        const pres = adjList[course];
        for(let i = 0; i < pres.length; i++){
            const pre = pres[i];
            dag[pre] -= 1;
            if(dag[pre] == 0) stack.push(pre);
        }
    }

    if(count < numCourses) return [];
    return flow;
};