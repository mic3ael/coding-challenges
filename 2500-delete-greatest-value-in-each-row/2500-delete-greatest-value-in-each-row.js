class MaxHeap {
    constructor(){
        this.data = [];
    }
    #hasParent(idx) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if(parentIdx < 0) return false;
        return true;
    }
    #hasLeftChild(idx) {
        const leftIdx = idx * 2 + 1;
        if(leftIdx >= this.data.length) return false;
        return true;
    }
    #hasRightChild(idx) {
        const rightIdx = idx * 2 + 2;
        if(rightIdx >= this.data.length) return false;
        return true;
    }
    #getParentIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }
    #getLeftChildIdx(idx) {
        return idx * 2 + 1;
    }
    #getRightChildIdx(idx) {
        return idx * 2 + 2;
    }
    #swap(idx, idx2) {
        const temp = this.data[idx];
        this.data[idx] = this.data[idx2];
        this.data[idx2] = temp;
    }
    #isEmpty(){
        return this.data.length == 0;
    }
    add(value) {
        this.data.push(value);
        let idx = this.data.length - 1;
        while(this.#hasParent(idx)){
            const parentIdx = this.#getParentIdx(idx);
            if(this.data[parentIdx] > this.data[idx]) break;
            this.#swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    delete() {
        if(this.#isEmpty()) return;
        const item = this.data[0];
        this.data[0] = this.data.pop();
        let idx = 0;
        
        while(this.#hasLeftChild(idx)) {
            let largestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.data[this.#getRightChildIdx(idx)] >= this.data[largestIdx])
                largestIdx = this.#getRightChildIdx(idx);
            if(this.data[idx] > this.data[largestIdx]) break;
            this.#swap(idx, largestIdx);
            idx = largestIdx;
        }

        return item;
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const heaps = [];
    let cols = 0;
    for(let row = 0; row < grid.length; row++){
        const maxHeap = new MaxHeap();
        cols = grid[row].length;
        for(let col = 0; col < grid[row].length; col++){
            maxHeap.add(grid[row][col]);
        }
        heaps.push(maxHeap);
    }
    
    let sum = 0;
    while(cols > 0){
        let currentMax = 0;
        for(let i = 0; i < heaps.length; i++){
            currentMax = Math.max(currentMax, heaps[i].delete());
        }
        sum += currentMax;
        cols--;
    }

    return sum;
};