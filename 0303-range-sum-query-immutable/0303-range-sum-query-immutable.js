class NumArray {
    #sums;
    constructor(nums) {
        this.#sums = new Array(nums.length);
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            this.#sums[i] = sum; 
        }
    }

    sumRange(left, right) {
        if(left == 0) return this.#sums[right];
        return this.#sums[right] - this.#sums[left - 1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */