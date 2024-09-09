class EventEmitter {
    constructor(){
        this.data = new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let idx = 0;
        if(!this.data.has(eventName)){
            const nestedData = new Map();
            nestedData.set(idx, callback);
            this.data.set(eventName, nestedData);
        }
        else {
            const nestedData = this.data.get(eventName);
            idx = nestedData.size;
            nestedData.set(idx, callback);
        } 
            
        return {
            unsubscribe: () => {
                const actions = this.data.get(eventName);
                for(let [key] of actions){
                    if(key === idx) actions.delete(key);
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(!this.data.has(eventName)) return [];
        const actions = this.data.get(eventName);
        const result = [];
        for(let [_, func] of actions){
            const val = func(...args);
            result.push(val);
        }
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */