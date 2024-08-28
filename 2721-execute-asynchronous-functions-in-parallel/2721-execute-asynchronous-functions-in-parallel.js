/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {

        const responses = new Array(functions.length).fill(null);
        let firstRejectMessage = null;
        let processesDone = 0;
        
        const process = async (i, fn) => {
            try {
                const res = await fn();
                responses[i] = res;
            } catch (err) {
                if (firstRejectMessage == null){
                    firstRejectMessage = err;
                    reject(firstRejectMessage)
                }
            } finally {
                processesDone++;
                if(processesDone >= functions.length)
                    resolve(responses);
            }
        };

        for (let i = 0; i < functions.length; i++) {
            process(i, functions[i]);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */