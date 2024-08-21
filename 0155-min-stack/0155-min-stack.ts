class MinStack {
    private data: number[];
    private minAtIndex: Map<number,number>;

    constructor() {
        this.data = [];
        this.minAtIndex = new Map<number, number>();
    }
    
    push(val: number): void {
        this.data.push(val);
        if(this.minAtIndex.size == 0)
            this.minAtIndex.set(0, val);
        else 
            this.minAtIndex.set(this.minAtIndex.size, Math.min(this.minAtIndex.get(this.minAtIndex.size - 1), val));
    }

    pop(): void {
        this.data.pop();
        this.minAtIndex.delete(this.minAtIndex.size - 1);
    }

    top(): number {
        if(this.data.length == 0) return;
        return this.data[this.data.length - 1];
    }

    getMin(): number {
        return this.minAtIndex.get(this.minAtIndex.size - 1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */