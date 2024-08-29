/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    
    const increment = () => {
        counter++;
        return counter;
    };

    const reset = () => {
        counter = init;
        return counter;
    };
    
    const decrement = () => {
        counter--;
        return counter;
    }

    return {
       increment,
       reset,
       decrement
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */