class ArrayWrapper {
    
    constructor(nums) {
        this.data = nums;
    }
    
    valueOf() {
        let sum = 0;
        for(let i = 0; i < this.data.length; i++){
            sum += this.data[i];
        }
        
        return sum;
    }
    
    toString() {
        if(this.data.length == 0) return `[]`;

        let result = `[`;
        for(let i = 0; i < this.data.length - 1; i++){
            result += `${this.data[i]},`;
        }
        result += `${this.data[this.data.length - 1]}]`;
        return result;
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */