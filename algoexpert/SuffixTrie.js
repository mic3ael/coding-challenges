class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      for (let i = 0; i < string.length; i++) {
        const subString = string.substring(i);
        let current = this.root;
        for (const char of subString) {
          if(!Object.hasOwn(current,char))
            current[char] = {};
          current = current[char];
        }
        current[this.endSymbol] = true;
      }
      return this.root;
    }
  
    contains(string) {
      let current = this.root;
      for (const char of string) {
        if (!Object.hasOwn(current, char)) return false;
        current = current[char];
      }
  
      if (Object.hasOwn(current, this.endSymbol)) return true;
  
      return false;
    }
  }