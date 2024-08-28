/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    let maxIslandArea = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] != 1) continue;

            const queue = [[row, col]];
            grid[row][col] = -1;
            let currentIslandMaxArea = 0;
            
            while(queue.length){
                const [r,c] = queue.shift();
                currentIslandMaxArea++;
                for(let i = 0; i < directions.length; i++){
                    const [dRow, dCol] = directions[i];
                    const nextRow = r + dRow;
                    const nextCol = c + dCol;

                    if(nextRow < 0 || nextRow > grid.length - 1) continue;
                    if(nextCol < 0 || nextCol > grid[nextRow].length - 1) continue;
                    if(grid[nextRow][nextCol] != 1) continue;
                    grid[nextRow][nextCol] = -1;
                    queue.push([nextRow, nextCol]);
                }
            }

            maxIslandArea = Math.max(maxIslandArea, currentIslandMaxArea);
        }
    }

    return maxIslandArea;
};