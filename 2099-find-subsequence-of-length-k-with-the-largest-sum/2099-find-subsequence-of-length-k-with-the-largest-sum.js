class MaxHeap {
    constructor() {
        this.data = [];
    }
    #hasParent(idx){
        const parentIdx = Math.floor((idx - 1)/2);
        if(parentIdx < 0) return false;
        return true;
    }
    #hasLeftChild(idx){
        const leftIdx = idx * 2 + 1;
        if(leftIdx >= this.data.length) return false;
        return true;
    }
    #hasRightChild(idx) {
        const rightIdx = idx * 2 + 2;
        if(rightIdx >= this.data.length) return false;
        return true;
    }
    #getParentIdx(idx){
        if(this.#hasParent(idx)) return Math.floor((idx-1)/2);
    }
    #getLeftChildIdx(idx){
        if(this.#hasLeftChild(idx)) return idx * 2 + 1;
    }
    #getRightChildIdx(idx){
        if(this.#hasRightChild(idx)) return idx * 2 + 2;
    }
    #swap(idx, idx2){
        const temp = this.data[idx];
        this.data[idx] = this.data[idx2];
        this.data[idx2] = temp;
    }
    #isEmpty(){
        return this.data.length == 0;
    }
    add(value, index){
        this.data.push({ value, index });
        let idx = this.data.length - 1;
        while(this.#hasParent(idx)){
            const parentIdx = this.#getParentIdx(idx);
            if(this.data[parentIdx].value > this.data[idx].value) break;
            this.#swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    print(str){
        console.log(str, this.data);
    }
    delete(){
        if(this.#isEmpty()) return;
        const item = this.data[0];
        this.data[0] = this.data.pop();
        let idx = 0;
        
        while(this.#hasLeftChild(idx)){
            let largestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.data[this.#getRightChildIdx(idx)].value >= this.data[largestIdx].value)
                largestIdx = this.#getRightChildIdx(idx);
            if(this.data[idx].value > this.data[largestIdx].value) break;
            this.#swap(idx, largestIdx);
            idx = largestIdx;
        }

        return item;
    }
}



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const maxHeap = new MaxHeap();
    
    for(let i = 0; i < nums.length; i++){
        maxHeap.add(nums[i], i);
    }
    
    const result = new Array(nums.length);
    
    while(k > 0){
        const item = maxHeap.delete();
        result[item.index] = item.value;
        k--;
    }

    const finalResult = [];

    for(let i = 0; i < result.length; i++) {
        if(isNaN(result[i])) continue;
        finalResult.push(result[i]);
    }

    return finalResult;
};