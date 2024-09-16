/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const queue = [];
    // first & last row
    for(let col = 0; col < board[0].length; col++){
        if(board[0][col] == 'O') { 
            queue.push([0, col]);
            board[0][col] = 'Z';
        }
        if(board[board.length - 1][col] == 'O') {
            queue.push([board.length - 1, col]);
            board[board.length - 1][col] = 'Z';
        }
    }

    // first & last col
    for(let row = 0; row < board.length; row++){
        if(board[row][0] == 'O') {
            queue.push([row, 0]);
            board[row][0] = 'Z';
        }
        if(board[row][board[row].length - 1] == 'O') {
            queue.push([row, board[row].length - 1]);
            board[row][board[row].length - 1] = 'Z';
        }
    }

    const directions = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ];

    while(queue.length){
        const [ row, col ] = queue.shift();
        for(let i = 0; i < directions.length; i++){
            const [dRow, dCol] = directions[i];
            const nextRow = row + dRow;
            const nextCol = col + dCol;

            if(nextRow < 0 || nextRow >= board.length) continue;
            if(nextCol < 0 || nextCol >= board[nextRow].length) continue;
            if(board[nextRow][nextCol] != 'O') continue;
            queue.push([nextRow, nextCol]);
            board[nextRow][nextCol] = 'Z';
        }
    }

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++){
            if(board[row][col] == 'O') board[row][col] = 'X';
            else if(board[row][col] == 'Z') queue.push([row, col]); 
        }
    }

    while(queue.length){
        const [row, col] = queue.pop();
        board[row][col] = 'O';
    }
};