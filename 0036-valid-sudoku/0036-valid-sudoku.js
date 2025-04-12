/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // validate rows
    for(let row = 0; row < 9; row++){
        const unique = new Set();
        for(let col = 0; col < 9; col++){
            const val = board[row][col];
            if(val === '.') continue;
            if(unique.has(val)) return false;
            unique.add(val);
        }
    }

    // validate cols
    for(let col = 0; col < 9; col++){
        const unique = new Set();
        for(let row = 0; row < 9; row++){
            const val = board[row][col];
            if(val === '.') continue;
            if(unique.has(val)) return false;
            unique.add(val);
        }
    }
    
    // validate boxes
    const boxUnique = new Array(9).fill(null).map(_ => new Set());
    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            const val = board[row][col];
            if(val === '.') continue;
            const boxNumber = Math.floor(row/3) * 3 + Math.floor(col/3);
            const unique = boxUnique[boxNumber];
            if(unique.has(val)) return false;
            unique.add(val);
        }
    }
    return true;
};