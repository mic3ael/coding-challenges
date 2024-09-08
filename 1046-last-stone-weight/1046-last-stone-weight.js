class MaxHeap {
    constructor(){
        this.data = [];
    }
    #getParentIdx(index){
        const parentIdx = Math.floor((index - 1)/2);
        if(parentIdx < 0) return;
        return parentIdx;
    }
    #getLeftChildIdx(idx){
        const leftIdx = (idx * 2) + 1;
        if(leftIdx > this.data.length - 1) return;
        return leftIdx;
    }
    #getRightChildIdx(idx){
        const rightIdx = (idx * 2) + 2;
        if(rightIdx > this.data.length - 1) return;
        return rightIdx;
    }
    #swap(idx, idx2){
        const temp = this.data[idx];
        this.data[idx] = this.data[idx2];
        this.data[idx2] = temp;
    }
    add(value){
        this.data.push(value);
        let idx = this.data.length - 1;
        while(!isNaN(this.#getParentIdx(idx)) && this.data[this.#getParentIdx(idx)] < this.data[idx]){
            this.#swap(this.#getParentIdx(idx), idx);
            idx = this.#getParentIdx(idx);
        }
    }
    print(){
        console.log(this.data);
    }
    peer(k){
        if(this.data.length == 0) return;
        return this.data[0];
    }
    delete(){
        if(this.data.length == 0) return;
        const item = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        let idx = 0;

        while(!isNaN(this.#getLeftChildIdx(idx))){
            let largestChildIdx = this.#getLeftChildIdx(idx);
            
            if(!isNaN(this.#getRightChildIdx(idx)) && this.data[this.#getRightChildIdx(idx)] > this.data[largestChildIdx])
                largestChildIdx = this.#getRightChildIdx(idx);

            if(this.data[largestChildIdx] < this.data[idx]) break;
            this.#swap(largestChildIdx, idx);
            idx = largestChildIdx;
        }

        return item;
    }
}


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap();

    for(let i = 0; i < stones.length; i++){
        maxHeap.add(stones[i]);
    }
    let first;
    while(maxHeap.peer()){
        first = maxHeap.delete();
        const second = maxHeap.delete();
        
        if(typeof second === 'undefined') break;

        const diff = first - second;

        if(diff == 0) {
            first = 0;
            continue;
        }
        maxHeap.add(diff);
    }

    return first;
};