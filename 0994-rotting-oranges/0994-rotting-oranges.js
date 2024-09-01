/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let countFresh = 0;
    const rottenQueue = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == 1) countFresh++;
            if (grid[row][col] == 2) rottenQueue.push([row, col]);
        }
    }

    if (countFresh == 0) return 0;
    if (rottenQueue.length == 0) return -1;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let minutes = 0;
    let numberOfElems = rottenQueue.length;
    
    console.log({rottenQueue, countFresh});
    
    while (rottenQueue.length) {
        const [currentRow, currentCol] = rottenQueue.shift();
        numberOfElems--;

        for (let i = 0; i < directions.length; i++) {
            const [dRow, dCol] = directions[i];
            const nextRow = currentRow + dRow;
            const nextCol = currentCol + dCol;

            if (nextRow < 0 || nextRow > grid.length - 1) continue;
            if (nextCol < 0 || nextCol > grid[nextRow].length - 1) continue;
            if (grid[nextRow][nextCol] != 1) continue;
            grid[nextRow][nextCol] = -1;
            countFresh--;
            rottenQueue.push([nextRow, nextCol]);
        }

        if (rottenQueue.length && numberOfElems == 0) {
            minutes++;
            numberOfElems = rottenQueue.length;
        }
    }
    console.log({minutes})
    if (countFresh > 0) return -1;

    return minutes;
};