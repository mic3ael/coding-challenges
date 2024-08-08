/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {

    const openStack = [];
    let result = "";

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === "(")
            openStack.push(result.length);
        
        if(s.charAt(i) === ")"){
            if(openStack.length === 0)
                continue;
            else 
                openStack.pop();
        }

        result += s.charAt(i);
    }


    if(openStack.length === 0) return result;

    const skipIdxs = new Set(openStack);
    
    let finalResult = "";
    
    for(let i = 0; i < result.length; i++){
        if(skipIdxs.has(i))
            continue;
        finalResult += result.charAt(i);
    }

    return finalResult;
};