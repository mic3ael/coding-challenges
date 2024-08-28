class TimeLimitedCache {
    constructor() {
        this.data = new Map();
        this.timeouts = new Map();
        this.expires = new Set();
    }
    
    set(key, value, duration) {
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
    
    get(key) {
        if(!this.data.has(key)) return -1;
        return this.data.get(key);
    }
    
    count() {
        return this.data.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */