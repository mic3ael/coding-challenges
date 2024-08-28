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
                    const g2 = grid2[r][c];
                    const g1 = grid1[r][c];
                    console.log({r, c, g2, g1});
                    isSub = false;
                }
                                
                for(let i = 0; i < directions.length; i++){
                    const [dRow, dCol] = directions[i];
                    const newRow = r + dRow;
                    const newCol = c + dCol;
                    if(newRow < 0 || newRow > grid2.length - 1) continue;
                    if(newCol < 0 || newCol > grid2[newRow].length - 1) continue;
                    if(grid2[newRow][newCol] !== 1) continue;
                    
                    queue.push([newRow, newCol]);
                    console.log({queue});
                }
                grid2[r][c] = -1;
            }
            if(isSub)
                countSubs++;
        }
    }
    return countSubs;
};