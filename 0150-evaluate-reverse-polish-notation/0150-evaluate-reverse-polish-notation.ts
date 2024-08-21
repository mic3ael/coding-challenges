function evalRPN(tokens: string[]): number {

    const operators = new Set([ "+", "-", "*", "/" ]);
    const actions = new Map();
    actions.set('+', (a,b) => a + b);
    actions.set('-', (a,b) => a - b);
    actions.set('*', (a,b) => a * b);
    actions.set('/', (a,b) => {
        const val = a / b;
        if(val < 0) return Math.ceil(val);
        return Math.floor(val);
    });

    const stack = [];
    let i = 0;

    while(i < tokens.length) {
        if(operators.has(tokens[i])) {
            const last = stack.pop();
            const first = stack.pop();
            const result = actions.get(tokens[i])(Number(first), Number(last));
            stack.push(result);
        } else
            stack.push(tokens[i]);
        i++;
    }
    
    return stack.pop();
};