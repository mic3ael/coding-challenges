/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    let numberOfIslands = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] != 0) continue;
            const queue = [[row, col]];
            let isIsland = true;

            while(queue.length){
                const [r,c] = queue.shift();

                if(r == 0 || r == grid.length - 1)
                    isIsland = false;
            
                if(c == 0 || c == grid[r].length - 1)
                    isIsland = false;

                for(let i = 0; i < directions.length; i++){
                    const [dRow, dCol] = directions[i];
                    const nextRow = r + dRow;
                    const nextCol = c + dCol;

                    if(nextRow < 0 || nextRow > grid.length - 1) continue;
                    if(nextCol < 0 || nextCol > grid[nextRow].length - 1) continue;
                    if(grid[nextRow][nextCol] != 0) continue;
                    grid[nextRow][nextCol] = -1;
                    queue.push([nextRow, nextCol]);
                }
            }

            if(isIsland)
                numberOfIslands++;
        }
    }

    return numberOfIslands;
};