class Solution {
    // time: O(row*col), space: O(row*col)
    maxAreaOfIsland(matrix) {
      let biggestIslandArea = 0;
      // avoid matrix mutation -> copy to the new matrix
      const copy = [];
      
      for(let row = 0; row < matrix.length; row++){
        const newRow = [];
        for(let col = 0; col < matrix[row].length; col++){
          newRow.push(matrix[row][col]);
        }
        newRow.unshift(0);
        newRow.push(0);
        copy.push(newRow);
      }
      
      copy.unshift(new Array(matrix.length + 1).fill(0));
      copy.push(new Array(matrix.length + 1).fill(0));
  
      // calc the biggest island area
      for(let row = 1; row < copy.length; row++){
        for(let col = 1; col < copy[row].length; col++){
          if(copy[row][col] !== 1){
            continue;
          }
          
          const queue = [{r: row, c: col}];
          copy[row][col] = -1;
  
          let islandAreas = 0;
          
          while(queue.length){
            const {r, c} = queue.pop();
            islandAreas++;
            if(copy[r-1][c] === 1) {
              queue.unshift({r: r-1, c}); 
              copy[r-1][c] = -1;
            }
            if(copy[r+1][c] === 1) {
              queue.unshift({r: r+1, c}); 
              copy[r+1][c] = -1;
            }
            if(copy[r][c-1] === 1) { 
              queue.unshift({r, c: c-1});
              copy[r][c-1] = -1;
            }
            if(copy[r][c+1] === 1) {
              queue.unshift({r, c: c+1});
              copy[r][c+1] = -1;
            }
          }
          
          biggestIslandArea = Math.max(biggestIslandArea, islandAreas);
        }
      }
  
      return biggestIslandArea;
    }
  }
  