/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();
    for(const num of nums) {
        if(count.has(num)) {
            const currentCount = count.get(num);
            count.set(num, currentCount + 1);
        } else count.set(num, 1);
    }

    const priorityQueue = new MaxHeap();
    for(const [num, occurs] of count) priorityQueue.push({num, occurs});
    const result = [];
    while(k > 0) {
        const { num } = priorityQueue.pop();
        result.push(num);
        k--;
    }
    return result;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper Methods
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Main Methods
    push(element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    // Helper methods for maintaining heap property
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].occurs >= this.heap[index].occurs) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largestIndex = index;

            if (leftChildIndex <= lastIndex && this.heap[leftChildIndex].occurs > this.heap[largestIndex].occurs) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && this.heap[rightChildIndex].occurs > this.heap[largestIndex].occurs) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex === index) break;

            this.swap(index, largestIndex);
            index = largestIndex;
        }
    }
}