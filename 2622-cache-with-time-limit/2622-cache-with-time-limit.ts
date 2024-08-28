class TimeLimitedCache {
    private data: Map<number, number>;
    private timeouts: Map<number, ReturnType<typeof setTimeout>>;
    private expires: Set<number>;
    constructor() {
        this.data = new Map<number, number>();
        this.timeouts = new Map<number, ReturnType<typeof setTimeout>>();
        this.expires = new Set<number>();
    }
    
    set(key: number, value: number, duration: number): boolean {
        if(this.data.has(key)){
            const timeoutId = this.timeouts.get(key);
            clearTimeout(timeoutId);
            this.expires.add(key);
        }

        const timeoutId = setTimeout(() => {
            this.data.delete(key);
            this.timeouts.delete(key);
            this.expires.add(key);
        }
        , duration);
        this.timeouts.set(key, timeoutId);
        this.data.set(key, value);
        
        return this.expires.has(key);
    }
    
    get(key: number): number {
        if(!this.data.has(key)) return -1;
        return this.data.get(key);
    }
    
    count(): number {
        return this.data.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */