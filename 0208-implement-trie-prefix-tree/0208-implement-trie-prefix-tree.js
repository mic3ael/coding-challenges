
class Trie {
    constructor() {
        this.data = new Map();
    }
    insert(word) {
        let current = this.data;
        for(let i = 0; i < word.length; i++){
            const c = word.charAt(i);
            if(current.has(c)){
                current = current.get(c);
                continue;
            }

            current.set(c, new Map());
            current = current.get(c);
        }

        current = current.set('*', true);
    }
    find(word){
        let current = this.data;
        for(let i = 0; i < word.length; i++){
            const c = word.charAt(i);
            if(!current.has(c)) return null;
            current = current.get(c);
        }
        return current;
    }
    search(word) {
        const current = this.find(word);
        if(current == null) return false;
        if(!current.has('*')) return false;
        return true;
    }
    startsWith(prefix) {
        const current = this.find(prefix);
        if(!current) return false;
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
