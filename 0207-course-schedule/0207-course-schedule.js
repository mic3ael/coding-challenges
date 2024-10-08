/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish2 = function(numCourses, prerequisites) {
    const adjList = new Map();

    for(let course = 0; course < numCourses; course++){
        adjList.set(course, []);
    }

    for(let i = 0; i < prerequisites.length; i++) {
        const [pre, course] = prerequisites[i];
        adjList.get(course).push(pre);
    }

    for(let course = 0; course < numCourses; course++){
        const visited = new Set();
        const queue = [...adjList.get(course)];
        
        while(queue.length){
            const currentCourse = queue.shift();
            visited.add(currentCourse);
            if(course === currentCourse) return false


            const pres = adjList.get(currentCourse);
            for(let i = 0; i < pres.length; i++){
                if(visited.has(pres[i])) continue;
                queue.push(pres[i]);
            }
        }
    }

    return true;
};

var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses);
    
    for(let i = 0; i < adjList.length; i++){
        adjList[i] = new Array();
    }

    const dag = new Array(numCourses).fill(0);
    for(let i = 0; i < prerequisites.length; i++) {
        const [pre, course] = prerequisites[i];
        adjList[course].push(pre);
        dag[pre] += 1;
    }

    const stack = [];

    for(let i = 0; i < dag.length; i++){
        if(dag[i] === 0) stack.push(i);
    }

    let count = 0;

    while(stack.length) {
        const course = stack.pop();
        count++;
        const pres = adjList[course];
        for(let i = 0; i < pres.length; i++){
            const pre = pres[i];
            dag[pre] -= 1;
            if(dag[pre] == 0) stack.push(pre);
        }
    }

    return count >= numCourses;
}