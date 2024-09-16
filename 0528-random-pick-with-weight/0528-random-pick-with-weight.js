class Solution {
    #probabilities;
    constructor(w) {
        let sum = 0;
        this.#probabilities = new Array(w.length);
        for(let i = 0; i < w.length; i++){
            sum += w[i];
            this.#probabilities[i] = sum;
        }
    }
    pickIndex() {
        const target = Math.random() * this.#probabilities[this.#probabilities.length - 1];
        let low = 0;
        let high = this.#probabilities.length - 1;
        
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if(this.#probabilities[mid] <= target)
                low = mid + 1;
            else
                high = mid;
        }

        return high;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */