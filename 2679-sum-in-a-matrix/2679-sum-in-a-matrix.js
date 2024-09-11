class MaxHeap {
    #data;
    constructor(){
        this.#data = [];
    }
    #hasParent(idx){
        const parentIdx = Math.floor(( idx - 1) / 2);
        if(parentIdx < 0) return false;
        return true;
    }
    #hasLeftChild(idx){
        const leftIdx = idx * 2 + 1;
        if(leftIdx >= this.#data.length) return false;
        return true;
    }
    #hasRightChild(idx){
        const rightIdx = idx * 2 + 2;
        if(rightIdx >= this.#data.length) return false;
        return true;
    }
    #getParentIdx(idx){
        return Math.floor((idx - 1) / 2);
    }
    #getLeftChildIdx(idx){
        return idx * 2 + 1;
    }
    #getRightChildIdx(idx){
        return idx * 2 + 2;
    }
    #isEmpty(){
        return this.#data.length == 0;
    }
    #swap(idx, idx2){
        const temp = this.#data[idx];
        this.#data[idx] = this.#data[idx2];
        this.#data[idx2] = temp; 
    }
    add(value){
        this.#data.push(value);
        let idx = this.#data.length - 1;
        while(this.#hasParent(idx)){
            const parentIdx = this.#getParentIdx(idx);
            if(this.#data[parentIdx] > this.#data[idx]) break;
            this.#swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    delete(){
        const item = this.#data[0];
        this.#data[0] = this.#data.pop();
        let idx = 0;
        
        while(this.#hasLeftChild(idx)){
            let largestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.#data[this.#getRightChildIdx(idx)] > this.#data[largestIdx])
                largestIdx = this.#getRightChildIdx(idx);
            if(this.#data[largestIdx] < this.#data[idx]) break;
            this.#swap(largestIdx, idx);
            idx = largestIdx;
        }
        return item;
    }
}

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    const heaps = [];
    for(let row = 0; row < nums.length; row++){
        const heap = new MaxHeap();
        for(let col = 0; col < nums[row].length; col++){
            heap.add(nums[row][col]);
        }
        heaps.push(heap);
    }

    let iter = nums[0].length;
    let result = 0;
    while(iter > 0){
        let currentMax = 0;
        for(let i = 0; i < heaps.length; i++){
            currentMax = Math.max(currentMax, heaps[i].delete());
        }
        result += currentMax;
        iter--;
    }
    return result;
};