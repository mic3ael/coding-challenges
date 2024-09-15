/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const queue = [];
    // first row
    for(let col = 0; col < grid[0].length; col++){
        if(grid[0][col] != 1) continue;
        queue.push([0, col]);
        grid[0][col] = -1;
    }

    // last row
    for(let col = 0; col < grid[grid.length - 1].length; col++){
        if(grid[grid.length - 1][col] != 1) continue;
        queue.push([grid.length - 1, col]);
        grid[grid.length - 1][col] = -1;
    }

    // first col
    for(let row = 0; row < grid.length; row++){
        if(grid[row][0] != 1) continue;
        queue.push([row, 0]);
        grid[row][0] = -1;
    }

    // last col
    for(let row = 0; row < grid.length; row++){
        if(grid[row][grid[row].length - 1] != 1) continue;
        queue.push([row, grid[row].length - 1]);
        grid[row][grid[row].length - 1] = -1;
    }
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    while(queue.length){
        const [row, col] = queue.shift();

        for(let i = 0; i < directions.length; i++){
            const [dRow, dCol] = directions[i];
            const nextRow = row + dRow;
            const nextCol = col + dCol;
            if(nextRow < 0 || nextRow >= grid.length) continue;
            if(nextCol < 0 || nextCol >= grid[nextRow].length) continue;
            if(grid[nextRow][nextCol] != 1) continue;
            queue.push([nextRow, nextCol]);
            grid[nextRow][nextCol] = -1;
        }
    }
    let result = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] == 1) result++;
        }
    }

    return result;
};