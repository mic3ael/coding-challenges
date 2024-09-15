class MinHeap {
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
    #swap(idx, idx2){
        const temp = this.#data[idx];
        this.#data[idx] = this.#data[idx2];
        this.#data[idx2] = temp;
    }
    #isEmpty(){
        return this.#data.length == 0;
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
        if(this.#isEmpty()) return;
        const item = this.#data[0];
        this.#data[0] = this.#data.pop();
        let idx = 0;

        while(this.#hasLeftChild(idx)){
            let smallestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.#data[this.#getRightChildIdx(idx)] < this.#data[smallestIdx])
                smallestIdx = this.#getRightChildIdx(idx);
            if(this.#data[smallestIdx] > this.#data[idx]) break;
            this.#swap(smallestIdx, idx);
            idx = smallestIdx;
        }

        return item;
    }
}

class SmallestInfiniteSet {
    #unique;
    #minHeap;
    constructor() {
        this.#unique = new Set();
        this.#minHeap = new MinHeap();
        for(let i = 1; i <= 1000; i++){
            this.#unique.add(i);
            this.#minHeap.add(i);
        }
    }

    popSmallest() {
        const min = this.#minHeap.delete();
        this.#unique.delete(min);
        return min;
    }

    addBack(num) {
        if(this.#unique.has(num)) return;
        this.#unique.add(num);
        this.#minHeap.add(num);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */