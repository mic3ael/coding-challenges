/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {

    const openStack = [];
    let result = s.split("");

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === "(")
            openStack.push(i);
        
        if(s.charAt(i) === ")"){
            if(openStack.length === 0)
                result[i] = "";
            else 
                openStack.pop();
        }
    }

    while(openStack.length != 0){
        const idx = openStack.pop();
        result[idx] = "";
    }

    return result.filter(elem => elem != "").join("");
};