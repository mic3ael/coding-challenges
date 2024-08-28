/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const directions = [
        [-1,0],
        [1,0],
        [0, -1],
        [0, 1],
    ];

    let countSubs = 0;
    for(let row = 0; row < grid2.length; row++){
        for(let col = 0; col < grid2[row].length; col++){
            const val = grid2[row][col];
            if(val != 1) continue;
            const queue = [[row, col]];
            let isSub = true;

            while(queue.length){
                const [r, c] = queue.shift();
                
                if(grid1[r][c] != 1){
                    isSub = false;
                }
                                
                for(let i = 0; i < directions.length; i++){
                    const [dRow, dCol] = directions[i];
                    const newRow = r + dRow;
                    const newCol = c + dCol;
                    if(newRow < 0 || newRow > grid2.length - 1) continue;
                    if(newCol < 0 || newCol > grid2[newRow].length - 1) continue;
                    if(grid2[newRow][newCol] !== 1) continue;
                    grid2[newRow][newCol] = -1;
                    queue.push([newRow, newCol]);
                }
            }

            if(isSub)
                countSubs++;
        }
    }
    return countSubs;
};