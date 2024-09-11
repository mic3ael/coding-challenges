class MinHeap {
    #data;
    constructor(){
        this.#data = [];
    }
    #hasParent(idx){
        const parentIdx = Math.floor((idx - 1) / 2);
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
            if(this.#data[parentIdx] < this.#data[idx]) break;
            this.#swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    delete(){
        const item = this.#data[0]
        this.#data[0] = this.#data.pop();
        let idx = 0;
        while(this.#hasLeftChild(idx)){
            let smallestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.#data[this.#getRightChildIdx(idx)] < this.#data[smallestIdx])
                smallestIdx = this.#getRightChildIdx(idx);
            if(this.#data[idx] < this.#data[smallestIdx]) break;
            this.#swap(idx, smallestIdx);
            idx = smallestIdx;            
        }
        return item;
    }
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const minHeap = new MinHeap();
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            minHeap.add(matrix[row][col]);
        }
    }

    let result;
    while(k > 0){
        result = minHeap.delete();
        k--;
    }

    return result;
};