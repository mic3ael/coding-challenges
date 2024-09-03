/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Map();

    // init adj list
    for(let course = 0; course < numCourses; course++){
        adjList.set(course, []);
    }

    for(let i = 0; i < prerequisites.length; i++) {
        const [pre, course] = prerequisites[i];
        adjList.get(course).push(pre);
    }

    console.log({adjList});

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