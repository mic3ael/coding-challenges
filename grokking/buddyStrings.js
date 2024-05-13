class Solution {
    // time: O(n), space: O(1) english has 26 letters
    buddyStrings(a, b) {
        
        if(a.length != b.length) return false;
        if(a.length < 2) return false;
        const visited = new Set();
        
        let diff = "";
        let count = 0;
        for(let i = 0; i < a.length; i++){
            visited.add(a[i]);
            if(a[i] == b[i]) continue;
            count++;
            if(diff.length == 0){
                diff = b[i];
                continue;
            }
            
            if(diff != a[i]) return false;
        }

        if(visited.size == 1) return true;
        
        return count !== 2 ? false : true;
    }
}