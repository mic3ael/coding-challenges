class MinHeap {
    #data;
    constructor(){
        this.#data = [];
    }
    #hasParent(idx){
        if(idx <= 0) return false;
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
    isEmpty(){
        return this.#data.length == 0;
    }
    add(data){
        this.#data.push(data);
        let idx = this.#data.length - 1;
        while(this.#hasParent(idx)){
            const parentIdx = this.#getParentIdx(idx);
            if(this.#data[parentIdx].weight < this.#data[idx].weight) break;
            this.#swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
    delete(){
        if(this.isEmpty()) return;
        if(this.#data.length == 1) return this.#data.pop();
        const item = this.#data[0];
        this.#data[0] = this.#data.pop();
        let idx = 0;

        while(this.#hasLeftChild(idx)){
            let smallestIdx = this.#getLeftChildIdx(idx);
            if(this.#hasRightChild(idx) && this.#data[this.#getRightChildIdx(idx)].weight < this.#data[smallestIdx].weight)
                smallestIdx = this.#getRightChildIdx(idx);
            if(this.#data[smallestIdx].weight > this.#data[idx].weight) break;
            this.#swap(smallestIdx, idx);
            idx = smallestIdx;
        }

        return item;
    }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime2 = function(times, n, k) {
    if(n == 0) return 0;
    const costs = new Array(n + 1).fill(Infinity);
    const graph = new Map();
    const minHeap = new MinHeap();
    costs[k] = 0;
    minHeap.add({ key: k, weight: 0 });

    for(let i = 1; i <= n; i++) {
        graph.set(i, []);
    }

    for(let i = 0; i < times.length; i++) {
        const [source, target, weight] = times[i];
        graph.get(source).push([ target, weight ]);
    }

    while(!minHeap.isEmpty()) {
        const { key, weight } = minHeap.delete();
        const connections = graph.get(key);
        for(let i = 0; i < connections.length; i++){
            const [ connection, weight ] = connections[i];
            const newWeight = weight + costs[key];
            if(newWeight < costs[connection]){
                costs[connection] = newWeight;
                minHeap.add({ key: connection, weight: newWeight });
            }
        }
    }

    let result = 0;
    let infinityCount = 0;
    for(const cost of costs){
        if(cost == Infinity){
            infinityCount++;
            continue;
        }
        result = Math.max(result, cost);
    }

    if(infinityCount > 1) return -1;
    return result;
};

var networkDelayTime = function(times, n, k) {
    if(n == 0) return 0;
    const costs = new Array(n).fill(Infinity);
    costs[k - 1] = 0;

    while(n > 0) {
        for(let i = 0; i < times.length; i++) {
            const [source, target, weight] = times[i];
            const targetCost = costs[source - 1] + weight;
            if(targetCost == Infinity) continue;
            costs[target - 1] = Math.min(targetCost, costs[target - 1]);
        }
        n--;
    }
    const max = Math.max(...costs);
    return max == Infinity ? -1 : max;
}