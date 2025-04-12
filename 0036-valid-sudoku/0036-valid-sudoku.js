/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = 9;
    
    const rows = new Array(n).fill(null).map(_ => new Set());
    const cols = new Array(n).fill(null).map(_ => new Set());
    const boxes = new Array(n).fill(null).map(_ => new Set());
    
    for(let row = 0; row < n; row++){
        for(let col = 0; col < n; col++){
            const val = board[row][col];
            if(val === '.') continue;
            
            if(rows[row].has(val)) return false;
            else rows[row].add(val);
            
            if(cols[col].has(val)) return false;
            else cols[col].add(val);

            const boxNum = Math.floor(row/3) * 3 + Math.floor(col/3);
            const box = boxes[boxNum];
            if(box.has(val)) return false;
            else box.add(val);
        }
    }

    return true;
};